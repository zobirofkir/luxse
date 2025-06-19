<?php

namespace App\Services\Services;

use App\Services\Constructors\ProductConstructor;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductService implements ProductConstructor
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
            ->with('category') 
            ->firstOrFail();

        return inertia('products/ProductDetailPage', [
            'product' => (new ProductResource($product))->resolve(),
        ]);
    }

    /**
     * Filter Products By Category
     */
    public function categoryProductBySlug($slug)
    {
        $products = Product::whereHas('category', function ($query) use ($slug) {
            $query->where('slug', $slug);
        })->with('category')->get();

        return inertia('products/ProductPage', [
            "products" => ProductResource::collection($products)->resolve(),
        ]);
    }
}