<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Card;
use App\Services\HeartQrService;
use Endroid\QrCode\QrCode;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;

use Endroid\QrCode\Builder\Builder;
use Endroid\QrCode\Writer\PngWriter;
use Endroid\QrCode\Encoding\Encoding;
use Endroid\QrCode\ErrorCorrectionLevel\ErrorCorrectionLevelHigh;
use Endroid\QrCode\Color\Color;
use Endroid\QrCode\Logo\Logo;

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
            'demo_url' => url('/demo/' . $card->uuid),
        ]);
    }

    public function show($id)
    {
        $card = Card::with('template')
            ->where('uuid', $id)
            ->firstOrFail();

        $template = $card->template;

        return response()->json([
            'template' => [
                'id' => $template->id,
                'name' => $template->name,
                'view' => $template->view,
                'price' => $template->price,
            ],
            'card' => [
                'id' => $card->id,
                'uuid' => $card->uuid,
                'status' => $card->status,
                'is_paid' => $card->is_paid,
                'paid_at' => $card->paid_at,
                'price' => $card->price,
            ],
            'schema' => $template->schema,
            'data' => $card->data,
        ]);
    }

    public function saveCard(Request $request, $uuid)
    {
        // 1. tìm card theo uuid
        $card = Card::where('uuid', $uuid)->firstOrFail();

        // 2. lưu toàn bộ data user nhập (JSON)
        $card->update([
            'data' => $request->all(),
        ]);

        // 3. trả về OK
        return response()->json([
            'success' => true
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

    public function publish($uuid)
    {
        $card = Card::where('uuid', $uuid)->firstOrFail();

        // Không publish lại
        if ($card->status === 'published') {
            return response()->json([
                'public_url' => $card->public_url,
            ]);
        }

        // Sinh public url
        $publicUrl = url('/c/' . $card->uuid);

        $card->update([
            'status' => 'published',
            'public_url' => $publicUrl,
        ]);

        return response()->json([
            'public_url' => $publicUrl,
            'qr_url' => url('/api/cards/' . $card->uuid . '/qr'),
        ]);
    }

    public function uploadImages(Request $request, $id)
    {
        $card = Card::where('uuid', $id)->firstOrFail();

        $validator = Validator::make(
            $request->all(),
            [
                'images' => 'required|array|min:1',
                'images.*' => 'image|mimes:jpg,jpeg,png,webp|max:10000',
            ],
            [
                // images
                'images.required' => 'Vui lòng chọn ít nhất 1 ảnh.',
                'images.array' => 'Dữ liệu ảnh không hợp lệ.',
                'images.min' => 'Vui lòng chọn ít nhất 1 ảnh.',

                // images.*
                'images.*.image' => 'File tải lên phải là hình ảnh.',
                'images.*.mimes' => 'Ảnh chỉ hỗ trợ JPG, JPEG, PNG, WEBP.',
                'images.*.max' => 'Dung lượng mỗi ảnh tối đa 10MB.',
            ]
        );

        if ($validator->fails()) {
            throw new ValidationException(
                $validator,
                response()->json([
                    'message' => 'Dữ liệu không hợp lệ',
                    'errors' => $validator->errors(),
                ], 422)
            );
        }

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
        $data['imageSources'] = array_merge($data['imageSources'] ?? [], $paths);

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
        $card->update(['data' => $data]);

        return response()->json([
            'path' => Storage::url($path)
        ]);
    }

    public function removeImage(Request $request, $uuid)
    {
        $card = Card::where('uuid', $uuid)->firstOrFail();

        $request->validate([
            'url' => 'required|string',
        ]);

        $url = $request->url;

        // convert /storage/... -> cards/uuid/images/xxx.webp
        $path = str_replace('/storage/', '', parse_url($url, PHP_URL_PATH));

        // xoá file
        if (Storage::disk('public')->exists($path)) {
            Storage::disk('public')->delete($path);
        }

        // update data
        $data = $card->data ?? [];
        $data['imageSources'] = array_values(
            array_filter($data['imageSources'] ?? [], fn($img) => $img !== $url)
        );

        $card->update(['data' => $data]);

        return response()->json([
            'success' => true,
        ]);
    }


    public function uploadMusic(Request $request, $id)
    {
        $card = Card::where('uuid', $id)->firstOrFail();

        $validator = Validator::make(
            $request->all(),
            [
                'music' => 'required|file|mimes:mp3,wav|max:10000',
            ]
        );

        if ($validator->fails()) {
            throw new ValidationException(
                $validator,
                response()->json([
                    'message' => 'Dữ liệu không hợp lệ',
                    'errors' => $validator->errors(),
                ], 422)
            );
        }

        $data = $card->data ?? [];

        /*
        ==========================
        🔥 1. XOÁ NHẠC CŨ NẾU CÓ
        ==========================
        */
        if (!empty($data['MUSIC_URL'])) {

            $oldUrl = $data['MUSIC_URL'];

            // Lấy phần path kể cả khi có domain
            $path = parse_url($oldUrl, PHP_URL_PATH);

            if ($path && str_starts_with($path, '/storage/')) {

                // Bỏ /storage/ đi
                $oldPath = substr($path, strlen('/storage/'));

                if (Storage::disk('public')->exists($oldPath)) {
                    Storage::disk('public')->delete($oldPath);
                }
            }
        }



        /*
        ==========================
        🎵 2. LƯU FILE MỚI
        ==========================
        */
        $file = $request->file('music');

        $name = uniqid() . '.' . $file->getClientOriginalExtension();
        $folder = "cards/{$card->uuid}/music";
        $path = "{$folder}/{$name}";

        Storage::disk('public')->putFileAs(
            $folder,
            $file,
            $name
        );

        $url = Storage::url($path);

        $data['MUSIC_URL'] = $url;

        $card->update(['data' => $data]);

        return response()->json([
            'path' => $url
        ]);
    }

    public function removeMusic(Request $request, $id)
    {
        $card = Card::where('uuid', $id)->firstOrFail();

        $data = $card->data ?? [];

        if (!empty($data['MUSIC_URL'])) {

            $oldUrl = $data['MUSIC_URL'];

            // Lấy path kể cả khi có domain
            $path = parse_url($oldUrl, PHP_URL_PATH);

            if ($path && str_starts_with($path, '/storage/')) {

                // Bỏ /storage/
                $oldPath = substr($path, strlen('/storage/'));

                if (Storage::disk('public')->exists($oldPath)) {
                    Storage::disk('public')->delete($oldPath);
                }
            }

            // Set về null
            $data['MUSIC_URL'] = null;

            $card->update([
                'data' => $data
            ]);
        }

        return response()->json([
            'message' => 'Đã xoá nhạc thành công'
        ]);
    }


    public function selectPresetMusic(Request $request, $id)
    {
        $card = Card::where('uuid', $id)->firstOrFail();

        $data = $card->data ?? [];

        // nếu trước đó là nhạc upload → xoá
        if (!empty($data['MUSIC_URL']) && str_contains($data['MUSIC_URL'], "/storage/cards/")) {

            $oldPath = str_replace('/storage/', '', $data['MUSIC_URL']);

            if (Storage::disk('public')->exists($oldPath)) {
                Storage::disk('public')->delete($oldPath);
            }
        }

        $data['MUSIC_URL'] = $request->music;

        $card->update(['data' => $data]);

        return response()->json([
            'success' => true
        ]);
    }




    public function qr($uuid, Request $request, HeartQrService $service)
    {
        $card = Card::where('uuid', $uuid)
            ->where('is_paid', true)
            ->firstOrFail();

        $style = $request->query('style', 'heart');

        $png = $service->generate($card->public_url, $style);

        return response($png, 200, [
            'Content-Type' => 'image/png',
            'Cache-Control' => 'public, max-age=86400',
        ]);
    }

}
