<?php
namespace App\Services;

use App\Repositories\User\UserRepositoryInterface;

class UserService {
    private $userRepository;

    public function __construct(UserRepositoryInterface $userRepository) {
        $this->userRepository = $userRepository;
    }

    public function getAll() {
        try {
            return $this->userRepository->all();
        } catch (\Throwable $th) {
            return $th->getMessage();
        }
    }

    public function getPaginate($request) {
        try {
            $limit = $request->query('limit');
            return $this->userRepository->paginate($limit);
        } catch (\Throwable $th) {
            return $th->getMessage();
        }
    }

}