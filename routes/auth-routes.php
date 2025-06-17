<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

/**
 * Login Route
 */
Route::get("/login", function() {
    return inertia("auth/LoginPage");
});

/**
 * Get Register Form
 */
Route::get('/register', [AuthController::class, 'index']);

/**
 * Register Route
 */
Route::post('/register', [AuthController::class, 'register']);