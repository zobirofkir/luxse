<?php

namespace App\Services\Constructors;

use App\Http\Requests\OrderRequest;

interface OrderConstructor
{
    /**
     * List Orders
     */
    public function index();

    /**
     * Store Order
     */
    public function store(OrderRequest $request);

    /**
     * Show Specific Order
     */
    public function show($id);
}