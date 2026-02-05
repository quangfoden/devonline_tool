<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Card;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

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

    public function uploadImage(Request $request, $uuid)
    {
        $card = Card::where('uuid', $uuid)
            ->where('status', 'draft')
            ->firstOrFail();

        $request->validate([
            'image' => 'required|image|max:4096', // 4MB
        ]);

        $path = $request->file('image')->store(
            "cards/{$card->uuid}",
            'public'
        );

        // LƯU PATH VÀO DATA
        $data = $card->data ?? [];
        $data['sender_image'] = $path;

        $card->update([
            'data' => $data
        ]);

        return response()->json([
            'path' => $path,
            'url' => asset('storage/' . $path),
        ]);
    }

}
