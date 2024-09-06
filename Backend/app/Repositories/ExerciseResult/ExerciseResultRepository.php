<?php
namespace App\Repositories\ExerciseResult;

use App\Repositories\ExerciseResult\ExerciseResultRepositoryInterface;
use App\Models\ExerciseResult;

class ExerciseResultRepository implements ExerciseResultRepositoryInterface {
    public function all() {
        
    }
    public function find($id) {
        
    }
    public function paginate($limit) {
        
    }
    public function create(array $data) {
        return ExerciseResult::create($data);
    }
    public function updateSolutionId($id, $data) {
        return ExerciseResult::where('solution_id', $id)->first()->update($data);
    }
    public function update($id, array $data) {
        
    }
    public function delete($id) {
        
    }
}