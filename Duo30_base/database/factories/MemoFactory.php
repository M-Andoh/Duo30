<?php

namespace Database\Factories;

use App\Models\Memo;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Memo>
 */
class MemoFactory extends Factory
{
    protected $model = Memo::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'revision' => $this->faker->randomNumber(),
            'title' => $this->faker->realText(10),
            'body' => $this->faker->realText(20),
        ];
    }
}
