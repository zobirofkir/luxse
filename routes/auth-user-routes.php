<?php

use Illuminate\Support\Facades\Route;

/**
 * Authenticated Routes
 */
Route::middleware(['auth'])->prefix('auth')->group(function () {
    /**
     * Profile Route
     */
    Route::get('/profile', function () {
        return inertia('auth/user/ProfilePage');
    })->name('profile');
});
