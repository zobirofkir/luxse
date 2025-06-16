<?php

use Illuminate\Support\Facades\Route;

Route::prefix('auth')->middleware('auth:api')->group(function () {
    /**
     * Profile Route
     */
    Route::get('/profile', function () {
        return inertia('auth/user/ProfilePage');
    });
});
