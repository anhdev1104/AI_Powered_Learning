<?php
namespace App\Services;

use App\Repositories\User\UserRepositoryInterface;

class AuthService {
    private $userRepository;

    public function __construct(UserRepositoryInterface $userRepository) {
        $this->userRepository = $userRepository;
    }

    public function profile() {
        try {
            return auth()->user()->load('role');
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function register($request) {
        try {
            $data = $request->validated();

            $data['role_id'] = 1;

            return $this->userRepository->create($data);
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function login($request)
    {
        $credentials = $request->validated();

        if (! $token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return $this->respondWithToken($token);
    }

    public function refresh()
    {
        try {
            return $this->respondWithToken(auth()->refresh());
        } catch (\Throwable $th) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
    }
    public function logout()
    {
        auth()->logout(true);

        return response()->json(['message' => 'Successfully logged out']);
    }

    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
            'data' => auth()->user()->load('role')
        ], 200);
    }

}