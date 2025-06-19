<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductResource;
use App\Models\Product;
use App\Services\Facades\ProductFacade;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Product page
     */
    public function index()
    {
        return ProductFacade::index();
    }

    /**
     * Product detail page
     *
     * @param $slug
     */
    public function show($slug)
    {
        return ProductFacade::show($slug);
    }

    /**
     * Filter Products By Category
     */
    public function categoryProductBySlug($slug)
    {
        return ProductFacade::categoryProductBySlug($slug);
    }

}
