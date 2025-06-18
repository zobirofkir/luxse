<?php

use App\Http\Controllers\OrderController;
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

    /**
     * Order Route
     */
    Route::get('/orders', function () {
        return inertia('orders/OrderPage');
    });
    
    /**
     * Get Orders
     */
    Route::get('/orders', [OrderController::class, 'index'])->name('orders.index');

    /**
     * Get Order Info
     */
    Route::get('/orders/{id}', [OrderController::class, 'show'])->name('orders.show');

    /**
     * Post Order
     */
    Route::post('/orders', [OrderController::class, 'store'])->name('orders.store');
});
