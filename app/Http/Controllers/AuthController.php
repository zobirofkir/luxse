<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    /**
     * Register Form
     */
    public function registerForm()
    {
        return inertia('auth/RegisterPage');
    }

    /**
     * Register Controller and Request
     */
    public function register(RegisterRequest $request)
    {
        User::create($request->validated());

        return redirect()->route('login')->with('success', 'Registration successful. Please log in.');
    }

    /**
     * Login Form
     */
    public function loginForm()
    {
        return inertia('auth/LoginPage');
    }

    /**
     * Login Controller and Request
     */
    public function login(RegisterRequest $request)
    {
        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return back()->with('error', 'Invalid credentials');
        }

        $request->session()->regenerate();

        return redirect()->route('dashboard')->with('success', 'Login successful.');
    }

}
