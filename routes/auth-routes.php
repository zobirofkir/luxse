<?php
use Illuminate\Support\Facades\Route;

Route::get("/auth/profile", function () {
    return inertia("auth/user/Profile");
});