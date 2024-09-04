<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ExerciseResult extends Model
{
    use HasFactory;

    protected $table = 'exercise_results';

    protected $filable = [
        'status',
        'memory_used',
        'solution_id'
    ];
}
