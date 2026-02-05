<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCardsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cards', function (Blueprint $table) {
            $table->id();

            // liên kết template
            $table->foreignId('template_id')
                ->constrained()
                ->cascadeOnDelete();

            // liên kết user
            $table->foreignId('user_id')
                ->nullable()
                ->constrained()
                ->nullOnDelete();

            // link public
            $table->uuid('uuid')->unique();

            // dữ liệu người dùng nhập (title, message, images, music…)
            $table->json('data');

            // link công khai
            $table->string('public_url')->nullable();

            // trạng thái vòng đời
            $table->enum('status', [
                'draft',     // đang chỉnh
                'paid',      // đã thanh toán
                'published', // public
                'disabled'   // bị khóa
            ])->default('draft');

            // optional: IP, device (sau này chống spam)
            $table->string('ip')->nullable();

            $table->timestamps();
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cards');
    }
}
