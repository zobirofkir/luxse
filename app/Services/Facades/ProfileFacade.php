<?php

namespace App\Services\Facades;

use Illuminate\Support\Facades\Facade;

class ProfileFacade extends Facade
{
    protected static function getFacadeAccessor()
    {
        return 'ProfileService';
    }
}