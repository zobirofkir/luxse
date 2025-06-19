<?php

namespace App\Services\Services;

use App\Services\Constructors\ResetPasswordConstructor;
use App\Http\Requests\ResetPasswordRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Password;

class ResetPasswordService implements ResetPasswordConstructor
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