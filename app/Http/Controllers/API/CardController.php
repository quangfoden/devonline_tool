<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Card;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;
class CardController extends Controller
{
    public function createDraft(Request $request)
    {
        $request->validate([
            'template_id' => 'required|exists:templates,id'
        ]);

        $userId = auth()->id();
        $sessionId = session()->getId(); // Dùng cho khách vãng lai

        // 1. Tìm bản nháp cũ chưa hoàn thành
        $existingCard = Card::where('status', 'draft')
            ->where('template_id', $request->template_id)
            ->when($userId, function ($query) use ($userId) {
                return $query->where('user_id', $userId);
            }, function ($query) use ($sessionId) {
                // Nếu không có user, dùng session_id để nhận diện khách vãng lai
                return $query->where('session_id', $sessionId);
            })
            ->first();

        // 2. Nếu đã có bản nháp, trả về ID đó luôn, không tạo thêm
        if ($existingCard) {
            return response()->json([
                'draft_id' => $existingCard->uuid,
            ]);
        }

        // 3. Nếu chưa có mới tiến hành tạo mới
        $card = Card::create([
            'template_id' => $request->template_id,
            'user_id' => $userId ?? null,
            'session_id' => $sessionId ?? null, // Lưu session nếu là khách
            'uuid' => Str::uuid(),
            'status' => 'draft',
            'ip' => $request->ip(),
            'data' => [],
        ]);

        return response()->json([
            'draft_id' => $card->uuid,
        ]);
    }

    public function show($id)
    {
        $card = Card::with('template')
            ->where('uuid', $id)
            ->firstOrFail();

        return response()->json([
            'card' => [
                'id' => $card->id,
                'data' => $card->data ?? [],
                'status' => $card->status,
            ],
            'template' => [
                'id' => $card->template->id,
                'slug' => $card->template->slug,
                'schema' => $card->template->schema,
                'view' => $card->template->view,
            ]
        ]);
    }

    public function autosave(Request $request, $uuid)
    {
        $card = Card::where('uuid', $uuid)
            ->where('status', 'draft')
            ->firstOrFail();

        $data = $request->input('data', []);

        // merge data cũ + mới
        $card->data = array_merge(
            $card->data ?? [],
            $data
        );

        $card->save();

        return response()->json([
            'status' => 'saved',
            'updated_at' => $card->updated_at,
        ]);
    }

    public function uploadImages(Request $request, $id)
    {
        $card = Card::where('uuid', $id)->firstOrFail();


        $request->validate([
            'images.*' => 'required|image|max:4096' // 4MB / ảnh
        ]);

        $paths = [];

        foreach ($request->file('images') as $file) {

            $name = uniqid() . '.webp';
            $path = "cards/{$card->uuid}/images/{$name}";

            $manager = new ImageManager(new Driver());

            $image = $manager->read($file)
                ->scale(width: 1280)
                ->toWebp(80);

            Storage::disk('public')->put($path, $image);

            $paths[] = Storage::url($path);
        }

        // Merge data
        $data = $card->data ?? [];
        $data['sender_gallery'] = array_merge($data['sender_gallery'] ?? [], $paths);

        $card->update(['data' => $data]);

        return response()->json([
            'paths' => $paths
        ]);
    }

    public function uploadImage(Request $request, $id)
    {
        $card = Card::where('uuid', $id)->firstOrFail();

        $request->validate([
            'image' => 'required|image|max:5120'
        ]);

        $manager = new ImageManager(new Driver());

        $image = $manager->read($request->file('image'))
            ->scaleDown(1200)
            ->toWebp(80);

        $path = "cards/{$card->uuid}/images/" . uniqid() . '.webp';

        Storage::disk('public')->put($path, $image);

        // lưu DB
        $data = $card->data ?? [];
        $data['sender_image'] = Storage::url($path);
        $card->update(['data'=> $data]);

        return response()->json([
            'path' => Storage::url($path)
        ]);
    }


}
