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
        $card = Card::with('template')
            ->where('uuid', $request->card_id)
            ->firstOrFail();

        abort_if($card->is_paid, 400, 'Card đã được thanh toán');

        $amount = $this->calculateAmount($card);
        abort_if($amount <= 0, 400, 'Không cần thanh toán');

        $orderCode = (int) (now()->format('ymdHis') . random_int(10, 99));

        $order = Order::create([
            'card_id' => $card->id,
            'order_code' => $orderCode,
            'amount' => (int) $amount,
            'status' => 'pending',
            'payment_method' => 'payos',
        ]);
    
        $payment = $payOS->createPayment([
            'orderCode' => $order->order_code,
            'amount' => $amount,
            'description' =>'Pay card #' . $card->id,
            'returnUrl' => config('payos.return_url') . '?order=' . $order->order_code,
            'cancelUrl' => config('payos.return_url'),
        ]);

        return response()->json([
            'checkoutUrl' => $payment['checkoutUrl'],
        ]);
    }

    private function calculateAmount(Card $card)
{
    $templatePrice = (int) ($card->template->price ?? 0);

    $data = $card->data ?? [];

    /*
    ==========================
    🖼 TÍNH ẢNH
    ==========================
    */
    $images = $data['imageSources'] ?? [];

    $extraImages = max(0, count($images) - 1);
    $imagePrice = $extraImages * 10000;

    /*
    ==========================
    🎵 TÍNH NHẠC
    ==========================
    */
    $musicPrice = 0;

    if (!empty($data['MUSIC_URL'])) {
        $musicPrice = 10000;
    }

    /*
    ==========================
    💰 TỔNG
    ==========================
    */
    return $templatePrice + $imagePrice + $musicPrice;
}


}
