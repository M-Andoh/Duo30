<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class TestUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::factory()->create([
            'name' => 'root',
            'email' => 'root@root.com',
            'password' => 'rootroot',
            'role_id' => 3, 
        ]);
        User::factory()->create([
            'name' => 'admin',
            'email' => 'admin@admin.com',
            'password' => 'adminadmin',
            'role_id' => 2, 
        ]);
        User::factory()->create([
            'name' => 'a326',
            'email' => 'andoh1961.w@gmail.com',
            'password' => 'andoh1027.w',
            'role_id' => 1, 
        ]);
    }
}
