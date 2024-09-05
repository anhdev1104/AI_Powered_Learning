<?php

namespace App\Http\Controllers\Apis\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Services\CategoryService;

class CategoryController extends Controller
{
    private $categoryService;
    public function __construct(CategoryService $categoryService) {
        $this->categoryService = $categoryService;
    }

    public function paginate(Request $request) {
        try {
            $categories = $this->categoryService->getPaginate($request);
            return response()->json(['data' => $categories], 200);
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function getBySlug($slug) {
        try {
            $category = $this->categoryService->findBySlug($slug);
            return response()->json(['data' => $category], 200);   
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function show($id) {
        try {
            $category = $this->categoryService->findById($id);
            return response()->json(['data' => $category], 200);   
        } catch (\Throwable $th) {
            throw $th;
        }
    }
}
