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
                'name' => 'Thiệp năm mới rực rỡ',
                'slug' => 'newyear-fireworks',
                'price' => 0,
                'description' => 'Thiệp chúc mừng năm mới với hiệu ứng pháo hoa',
                'view' => 'NewYearFireworks',
                'preview_url' => 'template/HappyNewYeah/index.html',
                'thumbnail' => 'templates/newyear-fireworks/thumbnail.png',
                'is_active' => 1,
                'schema' => json_encode(['fields' => [
                    'title'=>['type'=>'text'],'message'=>['type'=>'textarea'],'music'=>['type'=>'audio']
                ]]),
                'preview_data' => json_encode(['title'=>'Chúc mừng năm mới','message'=>'Chúc bạn một năm mới an khang thịnh vượng','music'=>null]),
                'created_at' => $now,
                'updated_at' => $now,
            ],

            [
                'name' => 'Thiệp sinh nhật tối giản',
                'slug' => 'birthday-minimal',
                'price' => 0,
                'description' => 'Mẫu thiệp sinh nhật đơn giản, dễ thương',
                'view' => 'BirthdayMinimal',
                'preview_url' => null,
                'thumbnail' => 'templates/birthday-minimal/thumbnail.png',
                'is_active' => 1,
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
                ]),
                'created_at' => $now,
                'updated_at' => $now,
            ],

            [
                'name' => 'Thiệp cưới cổ điển',
                'slug' => 'wedding-classic',
                'price' => 19900,
                'description' => 'Thiệp cưới trang nhã, phong cách cổ điển',
                'view' => 'WeddingClassic',
                'preview_url' => null,
                'thumbnail' => 'templates/wedding-classic/thumbnail.png',
                'is_active' => 1,
                'schema' => json_encode(['fields' => [
                    'bride' => ['type' => 'text'],
                    'groom' => ['type' => 'text'],
                    'date' => ['type' => 'date'],
                    'venue' => ['type' => 'text'],
                    'images' => ['type' => 'image', 'max' => 6]
                ]]),
                'preview_data' => json_encode(['bride'=>'Lan','groom'=>'Minh','date'=>'2026-05-01','venue'=>'Nhà hàng ABC','images'=>[]]),
                'created_at' => $now,
                'updated_at' => $now,
            ],

            [
                'name' => 'Thiệp mời hoa văn',
                'slug' => 'invitation-floral',
                'price' => 9900,
                'description' => 'Thiệp mời với họa tiết hoa thanh lịch',
                'view' => 'InvitationFloral',
                'preview_url' => null,
                'thumbnail' => 'templates/invitation-floral/thumbnail.png',
                'is_active' => 1,
                'schema' => json_encode(['fields' => [
                    'title'=>['type'=>'text'],'details'=>['type'=>'textarea'],'images'=>['type'=>'image','max'=>4]
                ]]),
                'preview_data' => json_encode(['title'=>'Lễ kỷ niệm','details'=>'Mời bạn đến dự buổi lễ','images'=>[]]),
                'created_at' => $now,
                'updated_at' => $now,
            ],

            [
                'name' => 'Thiệp chào mừng bé yêu',
                'slug' => 'baby-welcome',
                'price' => 0,
                'description' => 'Thiệp chúc mừng em bé mới sinh dễ thương',
                'view' => 'BabyWelcome',
                'preview_url' => null,
                'thumbnail' => 'templates/baby-welcome/thumbnail.png',
                'is_active' => 1,
                'schema' => json_encode(['fields' => [
                    'name'=>['type'=>'text'],'weight'=>['type'=>'text'],'date'=>['type'=>'date'],'images'=>['type'=>'image','max'=>4]
                ]]),
                'preview_data' => json_encode(['name'=>'Bé An','weight'=>'3.2kg','date'=>'2026-02-01','images'=>[]]),
                'created_at' => $now,
                'updated_at' => $now,
            ],

            [
                'name' => 'Thiệp cảm ơn đơn giản',
                'slug' => 'thankyou-simple',
                'price' => 0,
                'description' => 'Thiệp cảm ơn tối giản, phù hợp gửi sau sự kiện',
                'view' => 'ThankYouSimple',
                'preview_url' => null,
                'thumbnail' => 'templates/thankyou-simple/thumbnail.png',
                'is_active' => 1,
                'schema' => json_encode(['fields'=>['message'=>['type'=>'textarea'],'signature'=>['type'=>'text']]]),
                'preview_data' => json_encode(['message'=>'Cảm ơn bạn đã đồng hành cùng chúng tôi','signature'=>'DevOnline Team']),
                'created_at' => $now,
                'updated_at' => $now,
            ],

            [
                'name' => 'Thiệp kỷ niệm sang trọng',
                'slug' => 'anniversary-elegant',
                'price' => 19900,
                'description' => 'Thiệp kỷ niệm cho cặp đôi, phong cách sang trọng',
                'view' => 'AnniversaryElegant',
                'preview_url' => null,
                'thumbnail' => 'templates/anniversary-elegant/thumbnail.png',
                'is_active' => 1,
                'schema' => json_encode(['fields'=>['title'=>['type'=>'text'],'message'=>['type'=>'textarea'],'images'=>['type'=>'image','max'=>3]]]),
                'preview_data' => json_encode(['title'=>'Kỷ niệm ngọt ngào','message'=>'Cảm ơn vì những năm tháng bên nhau','images'=>[]]),
                'created_at' => $now,
                'updated_at' => $now,
            ],

            [
                'name' => 'Thiệp tốt nghiệp vui vẻ',
                'slug' => 'graduation-cap',
                'price' => 0,
                'description' => 'Thiệp chúc mừng tốt nghiệp đầy màu sắc',
                'view' => 'GraduationCap',
                'preview_url' => null,
                'thumbnail' => 'templates/graduation-cap/thumbnail.png',
                'is_active' => 1,
                'schema' => json_encode(['fields'=>['name'=>['type'=>'text'],'school'=>['type'=>'text'],'message'=>['type'=>'textarea']]]),
                'preview_data' => json_encode(['name'=>'Nguyễn Văn A','school'=>'Đại học XYZ','message'=>'Chúc mừng tốt nghiệp!']),
                'created_at' => $now,
                'updated_at' => $now,
            ],

            [
                'name' => 'Thiệp doanh nghiệp chuyên nghiệp',
                'slug' => 'corporate-invite',
                'price' => 29900,
                'description' => 'Thiệp doanh nghiệp, phù hợp cho sự kiện và hội nghị',
                'view' => 'CorporateInvite',
                'preview_url' => null,
                'thumbnail' => 'templates/corporate-invite/thumbnail.png',
                'is_active' => 1,
                'schema' => json_encode(['fields'=>['company'=>['type'=>'text'],'event'=>['type'=>'text'],'date'=>['type'=>'date'],'location'=>['type'=>'text']]]),
                'preview_data' => json_encode(['company'=>'Công ty ABC','event'=>'Hội thảo công nghệ','date'=>'2026-06-15','location'=>'Trung tâm Hội nghị']),
                'created_at' => $now,
                'updated_at' => $now,
            ],
        ]);

    }
}
