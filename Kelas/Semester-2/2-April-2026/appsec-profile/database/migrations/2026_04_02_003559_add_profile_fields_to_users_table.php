<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('username')->nullable()->unique()->after('name');
            $table->string('avatar')->nullable()->after('username');
            $table->string('tagline')->nullable()->after('avatar');       // misal: "Aspiring AppSec Engineer"
            $table->string('location')->nullable()->after('tagline');     // kota / negara
            $table->string('github_url')->nullable()->after('location');
            $table->string('linkedin_url')->nullable()->after('github_url');
            $table->string('website_url')->nullable()->after('linkedin_url');
        });
    }

    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn([
                'username', 'avatar', 'tagline', 'location',
                'github_url', 'linkedin_url', 'website_url',
            ]);
        });
    }
};
