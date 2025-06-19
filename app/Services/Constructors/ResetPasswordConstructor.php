<?php

namespace App\Services\Constructors;

use App\Http\Requests\ResetPasswordRequest;

interface ResetPasswordConstructor
{
    /**
     * Reset Password Page
     */
    public function resetPassword();

    /**
     * Send Reset Email Link
     */
    public function sendResetLinkEmail(ResetPasswordRequest $request);
}