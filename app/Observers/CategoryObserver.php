<?php

namespace App\Observers;

use App\Models\Category;
use Illuminate\Support\Str;

class CategoryObserver
{
    public function creating(Category $category): void
    {
        $category->slug = Str::slug($category->title);
    }

    public function updating(Category $category): void
    {
        if ($category->isDirty('title')) {
            $category->slug = Str::slug($category->title);
        }
    }
}
