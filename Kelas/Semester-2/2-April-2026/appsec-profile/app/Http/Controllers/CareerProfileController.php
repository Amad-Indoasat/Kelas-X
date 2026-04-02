<?php

namespace App\Http\Controllers;

use App\Models\CareerProfile;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CareerProfileController extends Controller
{
    private function defaultProfile(int $userId): CareerProfile
    {
        return CareerProfile::firstOrCreate(
            ['user_id' => $userId],
            [
                'title'     => 'Application Security Engineer',
                'bio'       => 'Mengamankan aplikasi dari titik kode hingga ke tahapan deployment. Fokus pada pemodelan ancaman, analisis kerentanan, dan mitigasi serangan tingkat lanjut.',
                'level'     => 'Junior',
                'status'    => 'In Training',
                'clearance' => 'Level 2',
                'focus'     => 'Web & API',
                'skills'    => [
                    [
                        'title'    => 'Secure Coding (OWASP)',
                        'desc'     => 'Mitigasi kerentanan umum seperti SQLi, XSS, CSRF, dan Insecure Deserialization.',
                        'progress' => 80,
                    ],
                    [
                        'title'    => 'Penetration Testing',
                        'desc'     => 'Eksploitasi aktif dan analisis keamanan aplikasi berbekal Burp Suite dan tool interaktif.',
                        'progress' => 65,
                    ],
                    [
                        'title'    => 'Cloud & DevSecOps',
                        'desc'     => 'Menerapkan CI/CD Pipeline yang aman, analisis SAST/DAST terintegrasi otomatis.',
                        'progress' => 50,
                    ],
                ],
                'roadmap'   => [
                    [
                        'year'   => 'Phase 1 - Foundation',
                        'title'  => 'Mastering Networking & Web App Architecture',
                        'status' => 'completed',
                    ],
                    [
                        'year'   => 'Phase 2 - Bug Bounty',
                        'title'  => 'Hunting bugs di program Publik (HackerOne, Bugcrowd)',
                        'status' => 'current',
                    ],
                    [
                        'year'   => 'Phase 3 - Certifications',
                        'title'  => 'Mendapatkan OSWE (Offensive Security Web Expert)',
                        'status' => 'locked',
                    ],
                    [
                        'year'   => 'Phase 4 - Dream Role',
                        'title'  => 'Senior AppSec Engineer di Tech Giant',
                        'status' => 'locked',
                    ],
                ],
            ]
        );
    }

    public function show(Request $request)
    {
        $user    = $request->user();
        $profile = $this->defaultProfile($user->id);

        return Inertia::render('Dashboard', [
            'careerProfile' => $profile,
            'auth'          => [
                'user' => array_merge($user->toArray(), ['avatar_url' => $user->avatarUrl()]),
            ],
        ]);
    }

    public function update(Request $request)
    {
        $validated = $request->validate([
            'title'           => 'required|string|max:255',
            'bio'             => 'nullable|string|max:1000',
            'level'           => 'required|string|max:100',
            'status'          => 'required|string|max:100',
            'clearance'       => 'required|string|max:100',
            'focus'           => 'required|string|max:100',
            'skills'          => 'nullable|array',
            'skills.*.title'  => 'required|string|max:255',
            'skills.*.desc'   => 'required|string|max:500',
            'skills.*.progress' => 'required|integer|min:0|max:100',
            'roadmap'         => 'nullable|array',
            'roadmap.*.year'  => 'required|string|max:255',
            'roadmap.*.title' => 'required|string|max:500',
            'roadmap.*.status' => 'required|in:completed,current,locked',
        ]);

        $profile = $this->defaultProfile($request->user()->id);
        $profile->update($validated);

        return back()->with('success', 'Profile updated successfully!');
    }
}
