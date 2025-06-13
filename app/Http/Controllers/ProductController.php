<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Product page
     */
    public function index()
    {
        return inertia('products/ProductPage');
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
