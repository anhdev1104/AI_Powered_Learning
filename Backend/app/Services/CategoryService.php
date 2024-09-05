<?php
namespace App\Services;

use App\Repositories\Category\CategoryRepositoryInterface;

class CategoryService {
    private $categoryRepository;
    public function __construct(CategoryRepositoryInterface $categoryRepository) {
        $this->categoryRepository = $categoryRepository;
    }

    public function getPaginate($request) {
        try {
            $limit = $request->query('limit');
            $categories = $this->categoryRepository->paginate($limit);
            return $categories;
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function findBySlug($slug) {
        try {
            $category = $this->categoryRepository->findBySlug($slug);
            return $category;
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function findById($id) {
        try {
            $category = $this->categoryRepository->find($id);
            return $category;
        } catch (\Throwable $th) {
            throw $th;
        }
    }
}