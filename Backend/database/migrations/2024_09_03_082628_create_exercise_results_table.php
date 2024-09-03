<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('exercise_results', function (Blueprint $table) {
            $table->id();
            $table->enum('status', ['passed', 'failed', 'pending'])->default('pending')->nullable();
            $table->float('memory_used')->nullable();
            $table->unsignedBigInteger('solution_id');

            $table->foreign('solution_id')->references('id')->on('solutions')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('exercise_results');
    }
};
