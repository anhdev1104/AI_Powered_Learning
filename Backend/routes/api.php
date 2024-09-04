<?php

use App\Http\Controllers\Apis\V1\AuthController;
use App\Http\Controllers\Apis\V1\ChatAlController;
use App\Http\Controllers\Apis\V1\ConversationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::prefix('v1')->group(function () {
    Route::controller(AuthController::class)->prefix('auth')
        ->group(function () {
            Route::post('/register', 'register');
            Route::post('/login', 'login');
            Route::post('/refresh', 'refresh');
            Route::post('/logout', 'logout')->middleware('jwt.auth');
            Route::get('/profile', 'profile')->middleware('jwt.auth');
        });
    Route::controller(ChatAlController::class)->prefix('al')
        ->group(function () {
            Route::post('/chat', 'chatBox')->middleware('jwt.auth');
        });

    Route::controller(ConversationController::class)->prefix('conversations')
        ->group(function () {
            Route::get('/', 'paginate');
        });
});