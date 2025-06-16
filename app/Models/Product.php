<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'category_id',
        'name',
        'slug',
        'description',
        'price',
        'stock',
        'material',
        'size',
        'image',
        'status',
    ];

    /**
     * Relationship with categories (Category)
     */
    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
