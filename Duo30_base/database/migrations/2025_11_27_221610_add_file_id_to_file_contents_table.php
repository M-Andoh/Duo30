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
            if (!Schema::hasColumn('file_contents', 'file_id')) {
                $table->unsignedBigInteger('file_id')->default(1)->after('id');

                // 外部キー制約を追加
                $table->foreign('file_id')
                      ->references('id')
                      ->on('files')
                      ->onUpdate('cascade')
                      ->onDelete('cascade');
            }
        });
    }

    public function down(): void
    {
        Schema::table('file_contents', function (Blueprint $table) {
            // 外部キーを先に削除
            $table->dropForeign(['file_id']);
            $table->dropColumn('file_id');
        });
    }
};