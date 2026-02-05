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
        DB::table('templates')->insert([
            [
                'name' => 'Thiệp sinh nhật tối giản',
                'slug' => 'birthday-minimal',
                'description' => 'Mẫu thiệp sinh nhật đơn giản, dễ thương',
                'view'=>'BirthdayMinimal',
                'thumbnail' => 'templates/birthday-minimal/thumbnail.png',
                'schema' => json_encode([
                    'fields' => [
                        'title' => ['type' => 'text', 'required' => true],
                        'message' => ['type' => 'textarea'],
                        'images' => ['type' => 'image', 'max' => 5],
                        'music' => ['type' => 'audio']
                    ]
                ]),
                'preview_data' => json_encode([
                    'title' => 'Chúc mừng sinh nhật 🎂',
                    'message' => 'Chúc bạn luôn vui vẻ và hạnh phúc',
                    'images' => [],
                    'music' => null
                ])
            ]
        ]);

    }
}
