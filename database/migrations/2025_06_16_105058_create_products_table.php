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
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->foreignId("category_id")->constrained()->cascadeOnUpdate()->cascadeOnDelete();
            $table->string('title'); 
            $table->string('slug')->unique(); 
            $table->text('description')->nullable(); 
            $table->decimal('price', 10, 2); 
            $table->integer('stock')->default(0); 
            $table->string('material')->nullable(); 
            $table->string('size')->nullable(); 
            $table->longText('image')->nullable(); 
            $table->enum('status', ['active', 'inactive'])->default('active'); 
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
