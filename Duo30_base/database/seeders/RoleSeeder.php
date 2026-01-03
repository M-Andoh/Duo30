<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    use HasFactory;

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Role::insert([
            ['id' => 0, 'name' => 'ゲスト'],
            ['id' => 1, 'name' => '利用者'],
            ['id' => 2, 'name' => '管理者'],
            ['id' => 3, 'name' => 'スーパーユーザー'],
        ]);
    }
}
