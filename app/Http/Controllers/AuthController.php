<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use App\Services\Facades\AuthFacade;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    /**
     * Register Form
     */
    public function registerForm()
    {
        return AuthFacade::registerForm();
    }

    /**
     * Register New User
     */
    public function register(RegisterRequest $request)
    {
        return AuthFacade::register($request);
    }

    /**
     * Login Form
     */
    public function loginForm()
    {
        return AuthFacade::loginForm();
    }

    /**
     * Login User
     */
    public function login(LoginRequest $request)
    {
        return AuthFacade::login($request);
    }

    /**
     * Logout Auth User
     */
    public function logout()
    {
        return AuthFacade::logout();
    }
}
