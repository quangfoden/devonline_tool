<?php

use App\Http\Controllers\PublicCardController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// routes/web.php
Route::get('/payment/payos/return', function () {
    return view('payment.success');
})->name('payos.return');

Route::get('/c/{uuid}', [PublicCardController::class, 'show']);
Route::get('{any}', function () {
    return view('layouts.app');
})->where('any', '^(?!c/).*$');
