<?php
use Illuminate\Support\Facades\Route;

/**
 * Profile Route
 */
Route::get("/auth/profile", function () {
    return inertia("auth/user/ProfilePage");
});