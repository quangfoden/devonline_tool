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
        'ip'
    ];

    protected $casts = [
        'data' => 'array'
    ];

    public function template()
    {
        return $this->belongsTo(Template::class);
    }


}
