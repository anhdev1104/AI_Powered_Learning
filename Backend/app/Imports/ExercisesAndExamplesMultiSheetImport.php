<?php

namespace App\Imports;

use Maatwebsite\Excel\Concerns\WithMultipleSheets;

class ExercisesAndExamplesMultiSheetImport implements WithMultipleSheets
{
    public function sheets(): array
    {
        return [
            0 => new ExercisesImport(),
            1 => new ExerciseExamplesImport(),
        ];
    }
}