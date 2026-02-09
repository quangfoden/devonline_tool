<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Card extends Model
{
    use HasFactory;
    protected $table = 'cards';

    protected $fillable = [
        'template_id',
        'user_id',
        'session_id',
        'uuid',
        'data',
        'public_url',
        'status',
        'is_paid',
        'paid_at',
        'ip',
        'price',
    ];

    protected $casts = [
        'data' => 'array',
        'price' => 'decimal:2',
        'is_paid' => 'boolean',
        'paid_at' => 'datetime',
    ];

    public function template()
    {
        return $this->belongsTo(Template::class);
    }

    public function orders()
    {
        return $this->hasMany(Order::class);
    }

    public function paidOrder()
    {
        return $this->hasOne(Order::class)->where('status', 'paid');
    }

    public function publish(): void
    {
        if ($this->status === 'published') {
            return;
        }

        $this->update([
            'status' => 'published',
            'public_url' => url('/c/' . $this->uuid),
        ]);
    }


}
