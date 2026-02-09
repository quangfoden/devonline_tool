<?php
namespace App\Services;

use PayOS\PayOS;

class PayOSService
{
    protected PayOS $payOS;

    public function __construct()
    {
        $this->payOS = new PayOS(
            config('payos.client_id'),
            config('payos.api_key'),
            config('payos.checksum_key'),
        );
    }

    public function createPayment(array $data)
    {
        return $this->payOS->createPaymentLink($data);
    }
}
