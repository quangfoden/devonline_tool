<?php
namespace App\Services;

class VNPayService
{
    public static function createPaymentUrl(array $data)
    {
        $inputData = [
            "vnp_Version" => "2.1.0",
            "vnp_Command" => "pay",
            "vnp_TmnCode" => config('vnpay.tmn_code'),
            "vnp_Amount" => (int) $data['amount'] * 100,
            "vnp_CurrCode" => "VND",
            "vnp_TxnRef" => (string) $data['order_id'],
            "vnp_OrderInfo" => "Thanh toan don hang #" . $data['order_id'],
            "vnp_OrderType" => "other",
            "vnp_Locale" => "vn",
            "vnp_ReturnUrl" => config('vnpay.return_url'),
            "vnp_IpAddr" => request()->ip(),
            "vnp_CreateDate" => now()->format('YmdHis'),
        ];

        ksort($inputData);
        $hashData = urldecode(http_build_query($inputData));
        $secureHash = hash_hmac('sha512', $hashData, config('vnpay.hash_secret'));

        return config('vnpay.url') . '?' . http_build_query(
            array_merge($inputData, [
                'vnp_SecureHash' => $secureHash
            ])
        );
    }

}
