<?php

namespace App\Services\Services;

use App\Http\Resources\CategoryResource;
use App\Http\Resources\ProductResource;
use App\Models\Category;
use App\Models\Product;
use App\Services\Constructors\WelcomeConstructor;

class WelcomeService implements WelcomeConstructor
{
    public function index() 
    {
        return inertia('WelcomePage', [
            'categories' => CategoryResource::collection(Category::all())->resolve(),
            "products" => ProductResource::collection(Product::all())->resolve()
        ]);
    }
}