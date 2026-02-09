<?php
namespace App\Services;

use Endroid\QrCode\QrCode;
use Endroid\QrCode\Writer\PngWriter;
use Endroid\QrCode\Encoding\Encoding;
use Endroid\QrCode\ErrorCorrectionLevel;
use Endroid\QrCode\Color\Color;

class HeartQrService
{
    public function generate(string $data, string $style = 'heart'): string
    {
        $size = 512;
        
        // 1️⃣ Tạo QR Code gốc
        $qrCode = new QrCode(
            data: $data,
            encoding: new Encoding('UTF-8'),
            errorCorrectionLevel: ErrorCorrectionLevel::High,
            size: $size,
            margin: ($style === 'heart') ? 30 : 10, // Heart cần margin rộng hơn để không mất góc
            foregroundColor: $this->getColor($style),
            backgroundColor: new Color(255, 255, 255, 0)
        );

        $writer = new PngWriter();
        $qrRaw = $writer->write($qrCode)->getString();

        // 2️⃣ Nếu không phải style heart -> Trả về QR vuông luôn cho nhanh
        if ($style !== 'heart') {
            return $qrRaw;
        }

        // 3️⃣ Logic vẽ Mask Trái tim (Chỉ chạy khi style === 'heart')
        $qrImg = imagecreatefromstring($qrRaw);
        imagesavealpha($qrImg, true);

        $mask = imagecreatetruecolor($size, $size);
        $transparent = imagecolorallocatealpha($mask, 0, 0, 0, 127);
        $black = imagecolorallocate($mask, 0, 0, 0);
        imagefill($mask, 0, 0, $transparent);
        imagesavealpha($mask, true);

        for ($t = 0; $t <= 2 * M_PI; $t += 0.001) {
            $x = 16 * pow(sin($t), 3);
            $y = 13 * cos($t) - 5 * cos(2 * $t) - 2 * cos(3 * $t) - cos(4 * $t);
            $pixelX = (int) ($size / 2 + $x * ($size / 38)); // Chỉnh 38 để tim to hơn chút
            $pixelY = (int) ($size / 2.3 - $y * ($size / 38));
            imageline($mask, $size / 2, $size / 2, $pixelX, $pixelY, $black);
        }

        $finalImg = imagecreatetruecolor($size, $size);
        imagealphablending($finalImg, false);
        imagesavealpha($finalImg, true);
        imagefill($finalImg, 0, 0, $transparent);

        for ($x = 0; $x < $size; $x++) {
            for ($y = 0; $y < $size; $y++) {
                if (((imagecolorat($mask, $x, $y) >> 24) & 0x7F) == 0) {
                    imagesetpixel($finalImg, $x, $y, imagecolorat($qrImg, $x, $y));
                }
            }
        }

        ob_start();
        imagepng($finalImg);
        $output = ob_get_clean();

        imagedestroy($qrImg); imagedestroy($mask); imagedestroy($finalImg);
        return $output;
    }

    private function getColor(string $style): Color
    {
        return match ($style) {
            'pink'    => new Color(236, 72, 153),
            'mint'    => new Color(16, 185, 129),
            'dark'    => new Color(17, 24, 39),
            'classic' => new Color(0, 0, 0),    // Đen truyền thống
            default   => new Color(239, 68, 68), // Đỏ cho 'heart'
        };
    }
}