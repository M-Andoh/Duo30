<?php

namespace Database\Seeders;

use App\Models\Todo;
use App\Models\TodoDetail;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TodoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $todo = Todo::factory()->create([
            'user_id' => 1, //$user->id,
        ]);

        TodoDetail::factory(5)->create([
            'user_id' => 1, //$user->id,
            'todo_id' => $todo->id,
        ]);

        $todo = Todo::factory()->create([
            'user_id' => 1, //$user->id,
        ]);

        TodoDetail::factory(5)->create([
            'user_id' => 1, //$user->id,
            'todo_id' => $todo->id,
        ]);

        $todo = Todo::factory()->create([
            'user_id' => 2, //$user->id,
        ]);

        TodoDetail::factory(5)->create([
            'user_id' => 2, //$user->id,
            'todo_id' => $todo->id,
        ]);

        $todo = Todo::factory()->create([
            'user_id' => 2, //$user->id,
        ]);

        TodoDetail::factory(5)->create([
            'user_id' => 2, //$user->id,
            'todo_id' => $todo->id,
        ]);
    }
}
