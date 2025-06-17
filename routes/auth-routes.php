<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

/**
 * Get Login Form
 */
Route::get('/login', [AuthController::class, 'loginForm']);

/**
 * Login Route
 */
Route::post('/login', [AuthController::class, 'login']);

/**
 * Get Register Form
 */
Route::get('/register', [AuthController::class, 'registerForm']);

/**
 * Register Route
 */
Route::post('/register', [AuthController::class, 'register']);