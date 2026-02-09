<?php

return [
    'client_id' => env('PAYOS_CLIENT_ID'),
    'api_key' => env('PAYOS_API_KEY'),
    'checksum_key' => env('PAYOS_CHECKSUM_KEY'),
    'can_cancel' => env('PAYOS_RETURN_URL', true),
    'return_url' => env('PAYOS_RETURN_URL', ''),
];
