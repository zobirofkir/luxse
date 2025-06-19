<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\NewPasswordController;
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
Route::get('/forgot-password', [ResetPasswordController::class, 'resetPassword'])->name('password.request');

/**
 * Send reset link to user's email
 */
Route::post('/forgot-password', [ResetPasswordController::class, 'sendResetLinkEmail'])->name('password.email');

/**
 * New Password Controller
 */
Route::get('/reset-password/{token}', [NewPasswordController::class, 'create'])->name('password.reset');

/**
 * Tratment controller
 */
Route::post('/reset-password', [NewPasswordController::class, 'store'])->name('password.update');