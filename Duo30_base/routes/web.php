<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    // デフォルト: app.blade.php
    //Inertia::setRootView('app');
    return Inertia::render('Welcome', [
        'canLogin'       => Route::has('login'),
        'canRegister'    => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion'     => PHP_VERSION,
    ]);
})->name('home');

Route::get('/dashboard', function () {
    $response = Inertia::render('Dashboard')->toResponse(request());
    $response->headers->setCookie(
        cookie(
            'last_url',
            'dashboard',
            60 * 24 * 7, // 有効期限（分）
            '/',         // パス
            null,        // ドメイン
            false,       // secure (HTTPSならtrue)
            false,       // httpOnly
            false,       // raw
            'Lax'        // SameSite
        )
    );
    return $response;
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/duo30', function () {
    $response = Inertia::render('Duo30')->toResponse(request());
    $response->headers->setCookie(
        cookie(
            'last_url',
            'duo30',
            60 * 24 * 7, // 有効期限（分）
            '/',         // パス
            null,        // ドメイン
            false,       // secure (HTTPSならtrue)
            false,       // httpOnly
            false,       // raw
            'Lax'        // SameSite
        )
    );
    return $response;
})
    ->middleware(['auth', 'verified'])
    ->name('duo30');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/artisan/{command}', function ($command) {
    Artisan::call($command);
    return Artisan::output();
});

require __DIR__ . '/auth.php';
