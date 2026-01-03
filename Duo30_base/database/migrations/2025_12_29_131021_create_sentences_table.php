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
        Schema::create('sentences', function (Blueprint $table) {
            $table->integer('id')->unsigned();  // auto incrementなし
            $table->primary('id');

            $table->unsignedBigInteger('user_id')->default(1);
            $table->foreign('user_id')
                ->references('id')
                ->on('users')
                ->onUpdate('cascade')
                ->onDelete('cascade');
                
            $table->integer('section_id')->unsigned();
            $table->foreign('section_id')
                ->references('id')
                ->on('sections')
                ->onUpdate('cascade')
                ->onDelete('cascade');
            $table->text('english')->nullable();
            $table->text('japanese')->nullable();





            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sentences');
    }
};
