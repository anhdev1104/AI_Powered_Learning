<?php
namespace App\Repositories\Category;

use App\Repositories\Category\CategoryRepositoryInterface;
use App\Models\Category;

class CategoryRepository implements CategoryRepositoryInterface {
    public function all() {
        return Category::all();
    }
    public function find($id) {
        return Category::with('exercises')->find($id);
    }
    public function findBySlug($slug) {
        return Category::with('exercises')->where('slug', $slug)->first();
    }
    public function paginate($limit) {
        $category = Category::with('exercises');
        return $limit ? $category->paginate($limit) : $category->get();
    }
    public function create(array $data) {
        return Category::create($data);   
    }
    public function update($id, array $data) {
        $category = Category::find($id);
        return $category->update($data);
    }
    public function delete($id) {
        $category = Category::find($id);
        return $category->delete();
    }
}