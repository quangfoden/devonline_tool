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
      'amount',
      'status',
      'payment_method',
    ];

    protected $casts = [
        'amount' => 'integer',
    ];

    public function card()
    {
        return $this->belongsTo(Card::class);
    }


}
