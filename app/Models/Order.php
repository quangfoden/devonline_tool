<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;
    protected $table = 'orders';

    protected $fillable = [
        'card_id',
        'order_code',
        'amount',
        'paid_amount',
        'status',
        'payment_method',
        'transaction_id',
        'payload',
        'failed_reason',
    ];

    protected $casts = [
        'amount' => 'integer',
        'payload' => 'array',
        'order_code' => 'string',
    ];

    public function card()
    {
        return $this->belongsTo(Card::class);
    }

    public function scopePending($q)
    {
        return $q->where('status', 'pending');
    }

    public function scopePaid($q)
    {
        return $q->where('status', 'paid');
    }

    public function markPaid(array $data = [])
    {
        $this->update([
            'status' => 'paid',
            'paid_amount' => $data['amount'] ?? $this->amount,
            'transaction_id' => $data['transactionId'] ?? null,
            'payload' => $data,
        ]);

        $this->card->update([
            'is_paid' => true,
            'paid_at' => now(),
        ]);
    }

    public function markFailed(string $reason = null, array $payload = [])
    {
        $this->update([
            'status' => 'failed',
            'failed_reason' => $reason,
            'payload' => $payload,
        ]);
    }
}
