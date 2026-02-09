<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Card;
use App\Models\Order;
use App\Services\PayOSService;
use Illuminate\Http\Request;
use PayOS\PayOS;

class PayOSController extends Controller
{
    public function create(Request $request, PayOSService $payOS)
    {
        $card = Card::where('uuid', $request->input('card_id'))->firstOrFail();

        $amount = $this->calculateImageAmount($card);
        abort_if($amount <= 0, 400, 'Không cần thanh toán');

        $orderCode = random_int(100000000, 999999999);
        $order = Order::create([
            'card_id' => $card->id,
            'order_code' => $orderCode,
            'amount' => $amount,
            'status' => 'pending',
            'payment_method' => 'payos',
        ]);


        $payment = $payOS->createPayment([
            'orderCode' => (int) $order->order_code,
            'amount' => $amount,
            'description' => 'Thanh toán thẻ #' . $card->id,
            'returnUrl' => config('payos.return_url'),
            'cancelUrl' => config('payos.return_url'),
        ]);

        return response()->json([
            'checkoutUrl' => $payment['checkoutUrl'],
        ]);
    }



    private function calculateImageAmount(Card $card): int
    {
        // 1️⃣ Giá template
        $templatePrice = (int) ($card->template->price ?? 0);

        // 2️⃣ Giá ảnh phát sinh
        $images = $card->data['imageSources'] ?? [];
        $extraImages = max(count($images) - 1, 0);
        $imagePrice = $extraImages * 10000;

        // 3️⃣ Tổng tiền
        return $templatePrice + $imagePrice;
    }

}
