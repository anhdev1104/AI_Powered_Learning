<?php 
namespace App\Services;

use Maatwebsite\Excel\Facades\Excel;
use App\Imports\ExercisesAndExamplesMultiSheetImport;
use App\Imports\ExercisesImport;
use App\Repositories\Exercise\ExerciseRepositoryInterface;

class ExerciseService {
    private $exerciseRepository;
    public function __construct(ExerciseRepositoryInterface $exerciseRepository) {
        $this->exerciseRepository = $exerciseRepository;
    }
    public function getAll() {
        try {
            return $this->exerciseRepository->all();
        } catch (\Throwable $th) {
            throw $th;
        }
    }
    public function getPaginate($request) {
        try {
            $limit = $request->query('limit');
            $exercises = $this->exerciseRepository->paginate($limit);
            return $exercises;
        } catch (\Throwable $th) {
            throw $th;
        }
    }
    public function findBySlug($slug) {
        try {
            $exercise = $this->exerciseRepository->findBySlug($slug);
            return $exercise;
        } catch (\Throwable $th) {
            throw $th;
        }
    }
    public function findById($id) {
        try {
            $exercise = $this->exerciseRepository->find($id);
            return $exercise;
        } catch (\Throwable $th) {
            throw $th;
        }
    }
    public function create($request) {
        try {
            $request->validate([
                'exercises' => 'required|file|mimes:xlsx',
            ]);
    
            Excel::import(new ExercisesAndExamplesMultiSheetImport(), $request->file('exercises'));

            return ['message' => 'Imported exercise successfully'];
        } catch (\Throwable $th) {
            throw $th;
        }
    }
}