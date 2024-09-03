<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ExerciseExamples extends Model
{
    use HasFactory;

    protected $table = 'exercise_examples';

    protected $filable = [
        'input',
        'output',
        'description',
        'exercise_id'
    ];
}
