<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('career_profiles', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->string('title')->default('Application Security Engineer');
            $table->text('bio')->nullable();
            $table->string('level')->default('Junior');
            $table->string('status')->default('In Training');
            $table->string('clearance')->default('Level 2');
            $table->string('focus')->default('Web & API');
            $table->json('skills')->nullable();   // array of {title, desc, progress}
            $table->json('roadmap')->nullable();  // array of {year, title, status}
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('career_profiles');
    }
};
