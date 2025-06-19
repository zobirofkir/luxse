<?php

namespace App\Http\Controllers;

use App\Http\Requests\ResetPasswordRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Password;

class ResetPasswordController extends Controller
{
    /**
     * Reset Password Page
     */
    public function resetPassword()
    {
        return inertia("reset-password/ResetPasswordPage");
    }

    /**
     * Send Reset Email Link
     */
    public function sendResetLinkEmail(ResetPasswordRequest $request)
    {
        $request->validated();

        $status = Password::sendResetLink(
            $request->only('email')
        );

        return back()->with('status', __($status));
    }
}
