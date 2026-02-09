<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Services\PayOSService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PayOSWebhookController extends Controller
{
    public function handle(Request $request, PayOSService $payOS)
    {
        $payload = $request->all();

        if (!$payOS->verifyWebhook($payload)) {
            return response()->json(['message' => 'invalid signature'], 400);
        }

        $data = $payload['data'];

        if ($data['status'] !== 'PAID') {
            return response()->json(['message' => 'ignored']);
        }

        $order = Order::where('order_code', $data['orderCode'])->first();
        if (!$order || $order->status === 'paid') {
            return response()->json(['message' => 'ok']);
        }

        DB::transaction(function () use ($order, $data) {
            $order->markPaid([
                'amount' => $data['amount'],
                'transactionId' => $data['paymentLinkId'],
            ]);
        });

        return response()->json(['message' => 'success']);
    }
}
