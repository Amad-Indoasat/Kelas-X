<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CareerProfile extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'title',
        'bio',
        'level',
        'status',
        'clearance',
        'focus',
        'skills',
        'roadmap',
    ];

    protected $casts = [
        'skills'  => 'array',
        'roadmap' => 'array',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
