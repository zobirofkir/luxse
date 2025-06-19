<?php

namespace App\Services\Facades;

use Illuminate\Support\Facades\Facade;

class NewPasswordFacade extends Facade
{
    protected static function getFacadeAccessor()
    {
        return 'NewPasswordService';
    }
}