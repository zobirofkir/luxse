<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ResetPasswordController;
use Illuminate\Support\Facades\Route;

/**
 * Get Login Form
 */
Route::get('/login', [AuthController::class, 'loginForm'])->name('login');

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

/**
 * Logout Route
 */
Route::get('/logout', [AuthController::class, 'logout'])->name('logout');

/**
 * Reset Password
 */
Route::get('/reset-password', [ResetPasswordController::class, 'resetPassword']);
