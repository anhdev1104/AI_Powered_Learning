<?php
namespace App\Repositories\Solution;

use App\Repositories\Solution\SolutionRepositoryInterface;
use App\Models\Solution;

class SolutionRepository implements SolutionRepositoryInterface {
    public function all() {
        
    }
    public function find($id) {
        
    }
    public function paginate($limit) {
        
    }
    public function create(array $data) {
        return Solution::create($data);
    }
    public function checkExist($user_id, $exercise_id) {
        return Solution::where('user_id', $user_id)
                       ->where('exercise_id', $exercise_id)
                       ->first();
    }
    
    public function update($id, array $data) {
        $solution = Solution::find($id);
        return $solution->update($data);
    }
    public function delete($id) {
        
    }
}