<?php

namespace App\Http\Controllers;

use App\Models\Card;
use Illuminate\Http\Request;

class PublicCardController extends Controller
{
    public function show($uuid)
    {
        $card = Card::where('uuid', $uuid)
            ->where('status', 'published')
            ->with('template')
            ->firstOrFail();

        $templateSlug = $card->template->view;
        // ví dụ: happy_new_year

        $htmlPath = public_path("template/{$templateSlug}/index.html");

        if (!file_exists($htmlPath)) {
            abort(404, 'Template not found');
        }

        $html = file_get_contents($htmlPath);

        // Inject data
        $dataJson = json_encode($card->data ?? [], JSON_UNESCAPED_UNICODE);

        $html = str_replace('{{DATA}}', $dataJson, $html);
        $html = str_replace('{{IS_DEMO}}', 'false', $html);
        return response($html)->header('Content-Type', 'text/html');
    }

    public function showDemo($uuid)
    {
        $card = Card::where('uuid', $uuid)
            ->where('status', 'draft') // chỉ demo
            ->with('template')
            ->firstOrFail();

        $templateSlug = $card->template->view;
        $htmlPath = public_path("template/{$templateSlug}/index.html");

        if (!file_exists($htmlPath)) {
            abort(404);
        }

        $html = file_get_contents($htmlPath);

        $dataJson = json_encode($card->data ?? [], JSON_UNESCAPED_UNICODE);

        // inject data + demo flag
        $html = str_replace('{{DATA}}', $dataJson, $html);
        $html = str_replace('{{IS_DEMO}}', 'true', $html);

        return response($html)->header('Content-Type', 'text/html');
    }


}

