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
 * Products Routes
 */
Route::resource('/products', ProductController::class);