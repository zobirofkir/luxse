<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategoryResource;
use App\Models\Category;
use Illuminate\Http\Request;

class WelcomeController extends Controller
{
    public function index() 
    {
        return inertia('WelcomePage', [
            'categories' => CategoryResource::collection(Category::all())->resolve()
        ]);
    }
}
