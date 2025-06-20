<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\WelcomeController;
use Illuminate\Support\Facades\Route;

/**
 * Home Page Route
 */
Route::resource('/', WelcomeController::class);

/**
 * About Page Route
 */
Route::get('/abouts', function () {
    return inertia('abouts/AboutPage');
})->name('abouts');

/**
 * Category Page Routes
 */
Route::resource('/categories', CategoryController::class);

/**
 * Contact Page Route
 */
Route::get('/faqs', function () {
    return inertia('faqs/FaqPage');
})->name('faqs');

/**
 * Products Routes
 */
Route::resource('/products', ProductController::class);

/**
 * Filter Products By Selected Category Slug
 */
Route::get('/category/{slug}', [ProductController::class, 'categoryProductBySlug'])->name('products.byCategorySlug');

/**
 * Contact Page Route
 */
Route::resource('/contacts', )
