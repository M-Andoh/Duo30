<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            // 外部キーにしたいカラム（unsignedBigIntegerなど）
            $table->unsignedTinyInteger('role_id')->default(1)->after('id');

            // 外部キー制約
            $table->foreign('role_id')
                ->references('id')
                ->on('roles');
            });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {

            // 外部キー削除 → カラム削除の順番が必要
            $table->dropForeign(['role_id']);
            $table->dropColumn('role_id');
        });
    }
};
