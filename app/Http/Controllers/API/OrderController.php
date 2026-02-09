<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function status($orderCode)
    {
        $order = Order::with('card')
            ->where('order_code', (int) $orderCode)
            ->first();

        if (!$order) {
            return response()->json(['status' => 'not_found']);
        }

        if ($order->status !== 'paid') {
            return response()->json(['status' => 'pending']);
        }

        return response()->json([
            'status' => $order->status,
            'public_url' => $order->card->public_url,
            'card_uuid' => $order->card->uuid,
        ]);
    }
}
