<?php
namespace App\Repositories\Solution;

interface SolutionRepositoryInterface {
    public function all();
    public function find($id);
    public function checkExist($user_id, $exercise_id);
    public function paginate($limit);
    public function create(array $data);
    public function update($id, array $data);
    public function delete($id);
}
