<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Services\PayOSService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class PayOSWebhookController extends Controller
{
    public function handle(Request $request, PayOSService $payOS)
    {
        Log::info("helo");
        $payload = $request->all();

        // 1️⃣ Verify signature
        try {
            $verified = $payOS->verifyWebhook($payload);
            Log::info('Verify result', ['verified' => $verified]);
        } catch (\Throwable $e) {
            Log::error('Verify exception', [
                'message' => $e->getMessage(),
                'line' => $e->getLine(),
            ]);
            return response()->json(['error' => 'verify exception'], 500);
        }

        if (!$verified) {
            Log::warning('Invalid webhook signature', $payload);
            return response()->json(['message' => 'invalid signature'], 400);
        }


        $data = $payload['data'] ?? null;

        if (!$data) {
            return response()->json(['message' => 'no data'], 400);
        }

        if (($data['code'] ?? null) !== '00') {
            Log::warning('Payment not success', $data);
            return response()->json(['message' => 'payment not success']);
        }



        return DB::transaction(function () use ($data) {

            // 2️⃣ Lock order để tránh race condition
            $order = Order::where('order_code', $data['orderCode'])
                ->lockForUpdate()
                ->first();

            if (!$order) {
                Log::error('Order not found', $data);
                return response()->json(['message' => 'order not found'], 404);
            }

            // 3️⃣ Idempotent - nếu đã paid thì bỏ qua
            if ($order->status === 'paid') {
                return response()->json(['message' => 'already processed']);
            }

            $paidAmount = (int) $data['amount'];
            $expectedAmount = (int) $order->amount;

            // 4️⃣ Thiếu tiền => không cho thành công
            if ($paidAmount < $expectedAmount) {

                Log::warning('Underpaid order', [
                    'order_id' => $order->id,
                    'expected' => $expectedAmount,
                    'paid' => $paidAmount,
                ]);

                return response()->json([
                    'message' => 'paid not enough'
                ], 400);
            }

            // 5️⃣ Dư tiền => vẫn thành công nhưng log lại
            if ($paidAmount > $expectedAmount) {
                Log::info('Overpaid order', [
                    'order_id' => $order->id,
                    'expected' => $expectedAmount,
                    'paid' => $paidAmount,
                ]);
            }

            // 6️⃣ Mark paid
            $order->markPaid([
                'paid_amount' => $paidAmount,
                'transactionId' => $data['paymentLinkId'] ?? null,
                'raw' => $data,
            ]);

            return response()->json(['message' => 'success']);
        });
    }
}
