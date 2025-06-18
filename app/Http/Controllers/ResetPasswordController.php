<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ResetPasswordController extends Controller
{
    /**
     * Reset Password Page
     */
    public function resetPassword()
    {
        return inertia("reset-password/ResetPasswordPage");
    }
}
