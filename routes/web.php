<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return inertia('WelcomePage');
})->name('home');

