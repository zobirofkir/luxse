<?php

namespace App\Providers;

use App\Services\Services\WelcomeService;
use Illuminate\Support\ServiceProvider;

class WelcomeServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->bind("WelcomeService", WelcomeService::class);
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
