<?php

namespace App\Services\Services;

use App\Http\Resources\CategoryResource;
use App\Models\Category;
use App\Services\Constructors\CategoryConstructor;

class CategoryService implements CategoryConstructor
{
    public function index()
    {
        return inertia("categories/CategoryPage", [
            'categories' => CategoryResource::collection(Category::all())->resolve()
        ]);
    }
}