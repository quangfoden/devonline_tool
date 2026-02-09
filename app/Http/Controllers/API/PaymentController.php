<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Card;
use App\Models\Order;
use App\Services\CardPriceService;
use App\Services\VNPayService;
use Illuminate\Http\Request;
use PayOS\PayOS;

class PaymentController extends Controller
{
    public function createVNPay(Card $card)
    {
        if ($card->is_paid) {
            return response()->json(['message' => 'Đã thanh toán'], 400);
        }

        $card->load('template');

        $amount = CardPriceService::calculate($card);

        $order = Order::where('card_id', $card->id)
            ->where('status', 'pending')
            ->first();

        if (!$order) {
            $order = Order::create([
                'card_id' => $card->id,
                'amount' => $amount,
                'status' => 'pending',
                'payment_method' => 'vnpay',
            ]);
        }

        $payUrl = VNPayService::createPaymentUrl([
            'order_id' => $order->id,
            'amount' => $amount,
        ]);

        return response()->json([
            'pay_url' => $payUrl
        ]);
    }

    public function vnpayReturn(Request $request)
    {
        $inputData = $request->all();
        $hashSecret = config('vnpay.hash_secret');

        $vnpSecureHash = $inputData['vnp_SecureHash'];
        unset($inputData['vnp_SecureHash'], $inputData['vnp_SecureHashType']);

        ksort($inputData);
        $hashData = urldecode(http_build_query($inputData));
        $checkHash = hash_hmac('sha512', $hashData, $hashSecret);

        if ($checkHash !== $vnpSecureHash) {
            abort(403, 'Sai chữ ký');
        }

        $order = Order::findOrFail($inputData['vnp_TxnRef']);

        if ($inputData['vnp_ResponseCode'] === '00') {
            $order->update(['status' => 'paid']);

            $card = $order->card;
            $card->update([
                'is_paid' => true,
                'paid_at' => now(),
            ]);

            return redirect("/payment/success?card={$card->id}");
        }

        $order->update(attributes: ['status' => 'failed']);

        return redirect("/payment/failed");
    }
}
