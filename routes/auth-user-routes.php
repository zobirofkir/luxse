<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

/**
 * Authenticated Routes
 */
Route::middleware(['auth'])->prefix('auth')->group(function () {
    
    /**
     * Profile Route
     */
    Route::resource('profile', ProfileController::class);
    
});
