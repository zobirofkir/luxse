<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductResource;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Product page
     */
    public function index()
    {
        return inertia('products/ProductPage', [
            "products" => ProductResource::collection(Product::all())->resolve()
        ]);
    }

    /**
     * Product detail page
     *
     * @param $id
     */
    public function show($id) 
    {
        return inertia('products/ProductDetailPage', [
            'id' => $id
        ]);
    }
}
