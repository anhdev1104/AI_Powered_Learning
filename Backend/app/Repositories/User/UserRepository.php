<?php 

namespace App\Repositories\User;

use App\Models\User;
use App\Repositories\User\UserRepositoryInterface;

class UserRepository implements UserRepositoryInterface {
    public function all() {
        $users = User::all();
    }

    public function paginate($limit) {
        $users = User::paginate($limit);
        return $users;
    }
    public function find($id) {
        $user = User::find($id);
        return $user;
    }
    public function create(array $data) {
        return User::create($data);
    }

    public function update($id, array $data) {
        $user = User::findOrFail($id);
        return $user->update($data);
    }
    public function delete($id) {
        
    }
}
