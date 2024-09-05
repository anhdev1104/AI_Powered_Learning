<?php

namespace App\Imports;

use App\Models\Exercise;
use App\Models\ExerciseExample;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class ExerciseExamplesImport implements ToModel, WithHeadingRow
{
    public function model(array $row)
    {
        $exercise = Exercise::where('title', $row['exercise_title'])->first();

        return new ExerciseExample([
            'input'       => $row['input'],
            'output'      => $row['output'],
            'description' => $row['description'],
            'exercise_id' => $exercise->id
        ]);
    }
}
