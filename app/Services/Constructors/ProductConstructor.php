<?php

namespace App\Services\Constructors;

interface ProductConstructor
{
    /**
     * Product page
     */
    public function index();

    /**
     * Product detail page
     *
     * @param $slug
     */
    public function show($slug);

    /**
     * Filter Products By Category
     */
    public function categoryProductBySlug($slug);
}