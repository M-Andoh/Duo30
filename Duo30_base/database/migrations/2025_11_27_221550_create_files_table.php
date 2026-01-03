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
        Schema::create('files', function (Blueprint $table) {
            $table->id();

            $table->integer('revision')->default(0);
            $table->string('name', 2048);
            $table->unsignedBigInteger('size')->default(0);
            $table->string('mime', 256);
            //$table->dateTime('ctime')->nullable();
            //$table->dateTime('atime')->nullable();
            $table->dateTime('mtime')->nullable();

            $table->timestamps();
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('files');
    }
};
