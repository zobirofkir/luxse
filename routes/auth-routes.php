<?php
use Illuminate\Support\Facades\Route;

/**
 * Login Route
 */
Route::get("/login", function() {
    return inertia("auth/LoginPage");
});

/**
 * Register Route
 */
Route::get("/register", function() {
    return inertia("auth/RegisterPage");
});