<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Order;
use Illuminate\Http\Request;

class PayOSWebhookController extends Controller
{
    public function handle(Request $request)
    {
        $data = $request->input('data');

        if (!$data || $data['status'] !== 'PAID') {
            return response()->json(['message' => 'ignored']);
        }

        $order = Order::where('order_code', $data['orderCode'])->first();

        if (!$order || $order->status === 'paid') {
            return response()->json(['message' => 'ok']);
        }

        $order->update(['status' => 'paid']);

        $order->card->update([
            'is_paid' => true,
            'paid_at' => now(),
        ]);

        return response()->json(['message' => 'success']);
    }
}
