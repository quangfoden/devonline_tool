<?php

namespace Database\Seeders;

use DB;
use Illuminate\Database\Seeder;

class TemplateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $now = date('Y-m-d H:i:s');

        DB::table('templates')->insert([
            [
                'name' => 'New Year 2026',
                'slug' => 'newyear-fireworks',
                'price' => 20000,
                'description' => 'Website dành cho năm mới với hiệu ứng pháo hoa đẹp mắt',
                'view' => 'HappyNewYeah',
                'preview_url' => 'template/HappyNewYeah/index.html',
                'thumbnail' => 'template/HappyNewYeah/images/thumbnail.png',
                'is_active' => 1,
                'schema' => json_encode([
                    'fields' => [
                        'title' => ['type' => 'text'],
                        'message' => ['type' => 'textarea'],
                        'music' => ['type' => 'audio']
                    ]
                ]),
                'preview_data' => json_encode(['title' => 'Chúc mừng năm mới', 'message' => 'Chúc bạn một năm mới an khang thịnh vượng', 'music' => null]),
                'created_at' => $now,
                'updated_at' => $now,
            ],

        ]);

    }
}
