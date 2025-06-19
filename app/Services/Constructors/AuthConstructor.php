<?php

namespace App\Services\Constructors;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;

interface AuthConstructor
{
    /**
     * Register Form
     */
    public function registerForm();

    /**
     * Register New User
     */
    public function register(RegisterRequest $request);

    /**
     * Login Form
     */
    public function loginForm();

    /**
     * Login User
     */
    public function login(LoginRequest $request);

    /**
     * Logout Auth User
     */
    public function logout();
}