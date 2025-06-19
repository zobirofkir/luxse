<?php

namespace App\Http\Controllers;

use App\Http\Requests\OrderRequest;
use App\Mail\OrderPlacedMail;
use App\Models\Order;
use App\Models\Product;
use App\Services\Facades\OrderFacade;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class OrderController extends Controller
{
    /**
     * List Orders
     */
    public function index()
    {
        return OrderFacade::index();
    }

    /**
     * Store Order
     */
    public function store(OrderRequest $request)
    {
        return OrderFacade::store($request);
    }

    /**
     * Show Specific Order
     */
    public function show($id)
    {
        return OrderFacade::show($id);
    }

}
