<?php

namespace App\Providers;

use App\Services\Services\NewPasswordService;
use Illuminate\Support\ServiceProvider;

class NewPasswordServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->bind('NewPasswordService', NewPasswordService::class);
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
