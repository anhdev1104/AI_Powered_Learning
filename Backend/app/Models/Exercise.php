<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Exercise extends Model
{
    use HasFactory;

    protected $table = 'exercises';

    protected $fillable = [
        'title',
        'description',
        'constraints',
        'difficulty',
        'slug',
        'category_id'
    ];

    public function exerciseExample() {
        return $this->hasMany(ExerciseExample::class,'exercise_id');
    }

    public function category() {
        return $this->belongsTo(Category::class, 'category_id');
    }
}
