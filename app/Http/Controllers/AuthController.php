<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterRequest;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function index()
    {
        return inertia('auth/RegisterPage');
    }

    public function register(RegisterRequest $request)
    {
        
    }
}
