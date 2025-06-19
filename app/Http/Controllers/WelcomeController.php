<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategoryResource;
use App\Http\Resources\ProductResource;
use App\Models\Category;
use App\Models\Product;
use App\Services\Facades\WelcomeFacade;
use Illuminate\Http\Request;

class WelcomeController extends Controller
{
    /**
     * Welcome Facade
     */
    public function index() 
    {
        return WelcomeFacade::index();
    }
}
