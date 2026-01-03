<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('file_contents', function (Blueprint $table) {
            // カラムが存在しない場合のみ追加
            if (!Schema::hasColumn('file_contents', 'user_id')) {
                $table->unsignedBigInteger('user_id')->default(1)->after('id');

                // 外部キー制約を追加
                $table->foreign('user_id')
                      ->references('id')
                      ->on('users')
                      ->onUpdate('cascade')
                      ->onDelete('cascade');
            }
        });
    }

    public function down(): void
    {
        Schema::table('file_contents', function (Blueprint $table) {
            // 外部キーを先に削除
            $table->dropForeign(['user_id']);
            $table->dropColumn('user_id');
        });
    }
};