<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = [
            [
                'name' => 'admin',
                'email' => 'admin@g.com',
                'password' => bcrypt('123'),
                'level' => 'admin',
            ],
        ];

        $user = [
            [
                'name' => 'kasir',
                'email' => 'kasir@g.com',
                'password' => bcrypt('123'),
                'level' => 'kasir',
            ],
        ];
        $user = [
            [
                'name' => 'manager',
                'email' => 'manager@g.com',
                'password' => bcrypt('123'),
                'level' => 'manager',
            ],
        ];

        foreach ($user as $key => $value) {
            User::create($value);
        }
    }
}
