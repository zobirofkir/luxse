<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Category extends Model
{
    protected $fillable = [
        "title",
        "image",
        "slug",
        "description"
    ];

    /**
     * Add Relation Sheep
     */
    public function products() : HasMany
    {
        return $this->hasMany(Product::class);
    }
}
