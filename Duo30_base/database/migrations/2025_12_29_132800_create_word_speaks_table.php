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
        Schema::create('word_speaks', function (Blueprint $table) {
            $table->integer('id')->unsigned();  // auto incrementなし
            $table->primary('id');

            $table->integer('sentence_id')->unsigned();
            $table->foreign('sentence_id')
                ->references('id')
                ->on('sentences')
                ->onUpdate('cascade')
                ->onDelete('cascade');
            $table->longText('speak')->charset('binary');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('english_fast_spekings');
    }
};
