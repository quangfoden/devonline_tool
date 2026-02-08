<?php
namespace App\Services;

use App\Models\Card;

class CardPriceService
{
    public static function calculate(Card $card): int
    {
        $basePrice = (int) $card->template->price;

        $images = $card->data['imageSources'] ?? [];
        $extraImages = max(0, count($images) - 1);

        return $basePrice + $extraImages * 10000;
    }
}
