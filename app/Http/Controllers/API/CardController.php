<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class CardController extends Controller
{
    public function store(Request $request)
    {
        $card = Card::create([
            'template_id' => $request->template_id,
            'uuid' => Str::uuid(),
            'data' => $request->data
        ]);

        return response()->json([
            'url' => url('/card/' . $card->uuid)
        ]);
    }

}
