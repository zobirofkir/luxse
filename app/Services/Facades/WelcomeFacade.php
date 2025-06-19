<?php

namespace App\Services\Facades;

use Illuminate\Support\Facades\Facade;

class WelcomeFacade extends Facade
{
    protected static function getFacadeAccessor()
    {
        return 'WelcomeService';
    }
}