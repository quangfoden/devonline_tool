<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Template extends Model
{
    use HasFactory;
    protected $table = 'templates';

    protected $fillable = [
        'name',
        'slug',
        'description',
        'view',
        'thumbnail',
        'preview_url',
        'is_active',
        'schema',
        'preview_data',
    ];

    // Trong file app/Models/Template.php
    protected $casts = [
        'preview_data' => 'array', // Hoặc 'json'
        'schema' => 'array',
    ];


    public function cards()
    {
        return $this->hasMany(Card::class);
    }
}
