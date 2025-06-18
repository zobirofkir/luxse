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
     * @param $slug
     */
    public function show($slug)
    {
        $product = Product::where('slug', $slug)
            ->with('category') // Make sure to eager-load the relation
            ->firstOrFail();

        return inertia('products/ProductDetailPage', [
            'product' => (new ProductResource($product))->resolve(), // resolve() for raw array
        ]);
    }

}
