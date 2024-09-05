<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ExerciseExample extends Model
{
    use HasFactory;

    protected $table = 'exercise_examples';

    protected $fillable = [
        'input',
        'output',
        'description',
        'exercise_id'
    ];
}
