<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Template;
use Illuminate\Http\Request;

class TemplateController extends Controller
{
    public function index()
    {
        return Template::select(
            'id',
            'name',
            'slug',
            'description',
            'preview_data',
            'preview_url',
            'thumbnail'
        )
            ->withCount([
                'cards as used_count' => function ($q) {
                    $q->where('is_paid', true);
                }
            ])
            ->get();
    }


    public function show($slug)
    {
        $template = Template::where('slug', $slug)->firstOrFail();

        return response()->json([
            'template' => [
                'id' => $template->id,
                'name' => $template->name,
                'slug' => $template->slug,
                'description' => $template->description,
                'view' => $template->view,
                'schema' => $template->schema,
            ],
            'data' => $template->preview_data
        ]);
    }

    public function create($slug)
    {
        $template = Template::where('slug', $slug)->firstOrFail();

        return response()->json([
            'template' => $template,
            'preview_data' => $template->preview_data
        ]);
    }

}
