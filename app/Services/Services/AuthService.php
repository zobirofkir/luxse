<?php

namespace App\Services\Services;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use App\Services\Constructors\AuthConstructor;
use Illuminate\Support\Facades\Auth;

class AuthService implements AuthConstructor
{
    /**
     * Register Page
     */
    public function registerForm()
    {
        return inertia('auth/RegisterPage');
    }

    /**
     * Register Logic
     */
    public function register(RegisterRequest $request)
    {
        User::create($request->validated());

        return redirect()->route('login')->with('success', 'Inscription réussie. Connectez-vous.');
    }

    /**
     * Login Page
     */
    public function loginForm()
    {
        return inertia('auth/LoginPage');
    }

    /**
     * Login Logic
     */
    public function login(LoginRequest $request)
    {
        $credentials = $request->only('email', 'password');

        if (!Auth::attempt($credentials)) {
            return back()->withErrors([
                'email' => 'Identifiants incorrects.',
            ]);
        }

        $request->session()->regenerate();

        return redirect()->intended('/auth/profile')->with('success', 'Connexion réussie.');
    }

    /**
     * Logout
     */
    public function logout()
    {
        Auth::logout();
        request()->session()->invalidate();
        request()->session()->regenerateToken();

        return redirect()->route('login')->with('success', 'Déconnexion réussie.');
    }
}