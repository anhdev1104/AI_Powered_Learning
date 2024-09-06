<?php
namespace App\Repositories\ExerciseResult;

interface ExerciseResultRepositoryInterface {
    public function all();
    public function find($id);
    public function updateSolutionId($id, $data);
    public function paginate($limit);
    public function create(array $data);
    public function update($id, array $data);
    public function delete($id);
}
