<?php

use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;

/**
 * Home Page Route
 */
Route::get('/', function () {
    return inertia('WelcomePage');
})->name('home');

/**
 * About Page Route
 */
Route::get('/abouts', function () {
    return inertia('abouts/AboutPage');
})->name('abouts');

/**
 * Category Page Route
 */
Route::get('/categories', function () {
    return inertia('categories/CategoryPage');
})->name('categories');

/**
 * Contact Page Route
 */
Route::get('/contacts', function () {
    return inertia('contacts/ContactPage');
})->name('contacts');

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

require __DIR__ . '/auth.php';

require __DIR__ . '/auth-routes.php';