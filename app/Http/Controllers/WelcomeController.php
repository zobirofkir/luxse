<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategoryResource;
use App\Http\Resources\ProductResource;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;

class WelcomeController extends Controller
{
    public function index() 
    {
        return inertia('WelcomePage', [
            'categories' => CategoryResource::collection(Category::all())->resolve(),
            "products" => ProductResource::collection(Product::all())->resolve()
        ]);
    }
}
