<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function index()
    {
        return inertia('auth/RegisterPage');
    }

    public function register(RegisterRequest $request)
    {
        User::create($request->validated());

        return redirect()->route('login')->with('success', 'Registration successful. Please log in.');
    }
}
