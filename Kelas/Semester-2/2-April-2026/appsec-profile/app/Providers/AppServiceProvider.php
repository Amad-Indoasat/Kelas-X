<?php

namespace App\Providers;

use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    public function register(): void {}

    public function boot(): void
    {
        Vite::prefetch(concurrency: 3);

        $this->configureRateLimiting();
    }

    protected function configureRateLimiting(): void
    {
        /*
         | LOGIN — 5 percobaan per menit per IP+email.
         | Jika gagal 5x, akun dikunci 1 menit.
         | Ini adalah perlindungan utama dari brute-force attack.
         */
        RateLimiter::for('login', function (Request $request) {
            $key = strtolower($request->input('email')) . '|' . $request->ip();
            return Limit::perMinute(5)->by($key)->response(function () {
                return back()
                    ->withErrors(['email' => 'Terlalu banyak percobaan login. Coba lagi dalam 1 menit.'])
                    ->withInput();
            });
        });

        /*
         | REGISTER — 3 pendaftaran akun per 10 menit per IP.
         | Mencegah pembuatan akun massal (account enumeration / bot).
         */
        RateLimiter::for('register', function (Request $request) {
            return Limit::perMinutes(10, 3)->by($request->ip());
        });

        /*
         | PROFILE UPDATE — 10 kali update per menit per user.
         | Mencegah spam update data (career profile / info akun).
         */
        RateLimiter::for('profile-update', function (Request $request) {
            return Limit::perMinute(10)->by($request->user()?->id ?? $request->ip());
        });

        /*
         | PASSWORD CHANGE — 5 kali per 10 menit per user.
         | Lebih ketat karena ini operasi sensitif.
         */
        RateLimiter::for('password-change', function (Request $request) {
            return Limit::perMinutes(10, 5)->by($request->user()?->id ?? $request->ip());
        });

        /*
         | FORGOT PASSWORD — 3 permintaan per 15 menit per IP.
         | Mencegah email flooding ke korban.
         */
        RateLimiter::for('forgot-password', function (Request $request) {
            return Limit::perMinutes(15, 3)->by($request->ip());
        });
    }
}
