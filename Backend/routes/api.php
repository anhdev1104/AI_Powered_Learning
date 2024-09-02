<?php

use App\Http\Controllers\Apis\V1\AuthController;
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
            
        });
});