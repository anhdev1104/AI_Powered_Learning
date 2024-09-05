<?php

namespace App\Http\Controllers\Apis\V1;

use App\Http\Controllers\Controller;
use App\Services\ExerciseService;
use Illuminate\Http\Request;

class ExerciseController extends Controller
{
    private $exerciseService;

    public function __construct(ExerciseService $exerciseService) {
        $this->exerciseService = $exerciseService;
    }

    public function create(Request $request) {
        try {
            $exercise = $this->exerciseService->create($request);

            return response()->json($exercise, 201);
        } catch (\Throwable $th) {
            return response()->json(['error' => $th->getMessage()], 400);

        }
    }

    public function getBySlug($slug) {
        try {
            $exercise = $this->exerciseService->findBySlug($slug);

            return response()->json(['data' => $exercise], 200);
        } catch (\Throwable $th) {
            return response()->json(['error' => $th->getMessage()], 400);

        }
    }
}
