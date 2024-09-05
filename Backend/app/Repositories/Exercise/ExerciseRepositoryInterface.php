<?php
namespace App\Repositories\Exercise;

interface ExerciseRepositoryInterface {
    public function all();
    public function find($id);
    public function findBySlug($slug);
    public function paginate($limit);
    public function create(array $data);
    public function update($id, array $data);
    public function delete($id);
}
