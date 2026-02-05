<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Card;
use Carbon\Carbon;

class CleanupDraftCards extends Command
{
    // Tên lệnh để chạy: php artisan cards:cleanup
    protected $signature = 'cards:cleanup';

    // Mô tả lệnh khi xem danh sách php artisan list
    protected $description = 'Xóa các bản ghi Card nháp đã quá 24h';

    public function __construct()
    {
        parent::__construct();
    }

    public function handle()
    {
        // Tính mốc 24h trước
        $cutoff = Carbon::now()->subHours(24);

        // Thực hiện xóa
        $count = Card::where('status', 'draft')
                     ->where('created_at', '<', $cutoff)
                     ->delete();

        $this->info("Đã dọn dẹp xong $count bản ghi nháp cũ.");
        return 0;
    }
}