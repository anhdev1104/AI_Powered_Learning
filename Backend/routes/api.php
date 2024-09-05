<?php

use App\Http\Controllers\Apis\V1\AuthController;
use App\Http\Controllers\Apis\V1\CategoryController;
use App\Http\Controllers\Apis\V1\ChatAlController;
use App\Http\Controllers\Apis\V1\ConversationController;
use App\Http\Controllers\Apis\V1\ExerciseController;
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
    Route::prefix('users')->group(function () {
        Route::get('/{id}/conversations', [ConversationController::class, 'getByUserId']);
    });

    Route::controller(ConversationController::class)->prefix('conversations')->middleware('jwt.auth')
        ->group(function () {
            Route::get('/', 'paginate');
            Route::get('/{id}/{user_id}', 'show');
            Route::delete('/{id}', 'delete');
        });

    Route::controller(ExerciseController::class)->prefix('exercises')
        ->group(function () {
            Route::post('/', 'create');
            Route::get('/{slug}', 'getBySlug');
        });

    Route::controller(CategoryController::class)->prefix('categories')
        ->group(function () {
            Route::get('/', 'paginate');
            Route::get('/{slug}', 'getBySlug');
        });
});