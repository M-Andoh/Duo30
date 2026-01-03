<?php

namespace Database\Seeders;

use App\Models\Memo;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MemoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Memo::factory(5)->create([
            'user_id' => 1,
        ]);
    }
}
