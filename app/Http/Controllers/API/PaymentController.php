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


    protected PayOS $payOS;

    public function __construct()
    {
        $this->payOS = new PayOS(
            config('payos.client_id'),
            config('payos.api_key'),
            config('payos.checksum_key')
        );
    }

    public function createPayOs(Request $request)
    {
        $cardId = $request->card_id;
        $amount = $request->amount;

        $orderCode = time();

        $order = Order::create([
            'order_code' => $orderCode,
            'card_id' => $cardId,
            'amount' => $amount,
            'status' => 'pending',
            'payment_method' => 'payos',
        ]);

        $data = [
            "orderCode" => $orderCode,
            "amount" => $amount,
            "description" => "Thanh toán thiệp #" . $cardId,
            "returnUrl" => route('payos.return'),
            "cancelUrl" => route('payos.cancel'),
        ];

        $result = $this->payOS->createPaymentLink($data);

        $order->update([
            'payos_order_id' => $result['paymentLinkId'],
        ]);

        return response()->json([
            'checkout_url' => $result['checkoutUrl'],
        ]);
    }

    public function handlePayOSWebhook(Request $request)
    {
        $payload = $request->all();

        $payOS = new PayOS(
            config('payos.client_id'),
            config('payos.api_key'),
            config('payos.checksum_key')
        );

        $verified = $payOS->verifyPaymentWebhookData($payload);

        if (!$verified) {
            return response()->json(['message' => 'Invalid signature'], 400);
        }

        $order = Order::where('order_code', $payload['data']['orderCode'])->first();

        if (!$order || $order->status === 'paid') {
            return response()->json(['message' => 'OK']);
        }

        if ($payload['data']['status'] === 'PAID') {
            $order->update([
                'status' => 'paid',
            ]);

            // 👉 unlock card / publish card / cho tải
        }

        return response()->json(['message' => 'OK']);
    }

}
