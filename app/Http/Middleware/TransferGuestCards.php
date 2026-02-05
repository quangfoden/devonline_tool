<?php

namespace App\Http\Middleware;

use Closure;
use App\Models\Card;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class TransferGuestCards
{
    public function handle($request, Closure $next)
    {
        // Kiểm tra nếu User đã đăng nhập
        if (Auth::check()) {
            $sessionId = Session::getId();
            $userId = Auth::id();

            // Tìm các bản nháp gắn với session_id này
            $exists = Card::where('session_id', $sessionId)
                          ->where('status', 'draft')
                          ->exists();

            if ($exists) {
                // Chuyển quyền sở hữu sang User ID
                Card::where('session_id', $sessionId)
                    ->where('status', 'draft')
                    ->update([
                        'user_id' => $userId,
                        'session_id' => null
                    ]);
            }
        }

        return $next($request);
    }
}