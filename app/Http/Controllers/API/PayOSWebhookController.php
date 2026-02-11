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
        \Log::info('Webhook received', $request->all());

        $payload = $request->all();

        if (!$payOS->verifyWebhook($payload)) {
            \Log::error('Invalid signature');
            return response()->json(['message' => 'invalid signature'], 400);
        }

        $data = $payload['data'] ?? null;

        if (!$data) {
            \Log::error('No data field in payload');
            return response()->json(['message' => 'no data'], 400);
        }

        if ($data['status'] !== 'PAID') {
            \Log::info('Status not PAID: ' . $data['status']);
            return response()->json(['message' => 'ignored']);
        }

        $order = Order::where('order_code', $data['orderCode'])->first();

        if (!$order) {
            \Log::error('Order not found: ' . $data['orderCode']);
            return response()->json(['message' => 'order not found']);
        }

        if ($order->status === 'paid') {
            \Log::info('Order already paid');
            return response()->json(['message' => 'ok']);
        }

        DB::transaction(function () use ($order, $data) {
            \Log::info('Running markPaid');
            $order->markPaid([
                'amount' => $data['amount'],
                'transactionId' => $data['paymentLinkId'],
            ]);
        });

        return response()->json(['message' => 'success']);
    }

}
