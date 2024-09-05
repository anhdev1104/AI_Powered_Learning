<?php

namespace App\Imports;

use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use App\Models\Exercise;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Str;

class ExercisesImport implements ToModel, WithHeadingRow
{
    public function model(array $row)
    {
        return new Exercise([
            'title'       => $row['title'],
            'slug'        => Str::slug($row['title'], '-'),
            'description' => $row['description'],
            'constraints' => $row['constraints'],
            'category_id' => $row['category_id'],
            'difficulty'  => $row['difficulty']
        ]);
    }
}