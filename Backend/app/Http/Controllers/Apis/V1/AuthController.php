<?php

namespace App\Http\Controllers\Apis\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Services\AuthService;
use App\Http\Requests\RegisterRequest;
use App\Http\Requests\LoginRequest;

class AuthController extends Controller
{
    private $authService;

    public function __construct(AuthService $authService) {
        $this->authService = $authService;
    }

    public function register(RegisterRequest $request) {
        try {
            $this->authService->register($request);

            return response()->json(['message' => 'Register successfully!'], 201);
        } catch (\Throwable $th) {
            return response()->json(['error' => $th->getMessage()], 422);
        }
    }

    public function login(LoginRequest $request) {
        return $this->authService->login($request);
    }
}
