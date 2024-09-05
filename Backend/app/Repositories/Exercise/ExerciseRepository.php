<?php
namespace App\Repositories\Exercise;

use App\Repositories\Exercise\ExerciseRepositoryInterface;
use App\Models\Exercise;

class ExerciseRepository implements ExerciseRepositoryInterface {
    public function all() {
        return Exercise::all();
    }
    public function find($id) {
        return Exercise::find($id);
    }
    public function findBySlug($slug) {
        return Exercise::with('exerciseExample')->where('slug', $slug)->first();
    }
    public function paginate($limit) {
        $exercise = Exercise::query();
        return $limit ? $exercise->paginate($limit) : $exercise->get();
    }
    public function create(array $data) {
        return Exercise::create($data);
    }
    public function update($id, array $data) {
        $exercise = Exercise::find($id);
        return $exercise->update($data);
    }
    public function delete($id) {
        $exercise = Exercise::find($id);
        return $exercise->delete();
    }
}