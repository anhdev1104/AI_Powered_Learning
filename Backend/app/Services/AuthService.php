<?php
namespace App\Services;

use App\Repositories\User\UserRepositoryInterface;

class AuthService {
    private $userRepository;

    public function __construct(UserRepositoryInterface $userRepository) {
        $this->userRepository = $userRepository;
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

    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
            'user' => auth()->user()->load('role')
        ]);
    }

}