<?php

use App\Http\Controllers\Duo30Controller;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::get('user', [UserController::class, 'index'])
    ->middleware('auth:sanctum')
    ->name('user.index');
Route::post('user', [UserController::class, 'add'])
    ->middleware('auth:sanctum')
    ->name('user.add');
Route::post('profile/{user}', [UserController::class, 'profile'])
    ->middleware('auth:sanctum')
    ->name('user.profile');
Route::post('password/{user}', [UserController::class, 'password'])
    ->middleware('auth:sanctum')
    ->name('user.password');
Route::delete('user/{user}', [UserController::class, 'delete'])
    ->middleware('auth:sanctum')
    ->name('user.delete');

//Route::middleware('auth:sanctum')->group(function () {
    Route::get('/duo30', [Duo30Controller::class, 'index'])->name('duo30.index');
    Route::get('/duo30/title/{id}', [Duo30Controller::class, 'getTitle'])->name('duo30.title');
    Route::get('/duo30/word/{id}', [Duo30Controller::class, 'getWord'])->name('duo30.word');
    Route::get('/duo30/japanese/{id}', [Duo30Controller::class, 'getJapanese'])->name('duo30.japanese');
    Route::get('/duo30/english/{id}', [Duo30Controller::class, 'getEnglish'])->name('duo30.english');
    Route::get('/duo30/english.fast/{id}', [Duo30Controller::class, 'getEnglishFast'])->name('duo30.english.fast');
//});
