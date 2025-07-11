<?php

namespace App\Services\Facades;

use Illuminate\Support\Facades\Facade;

class OrderFacade extends Facade
{
    protected static function getFacadeAccessor()
    {
        return 'OrderService';
    }
}