<?php

namespace App\Http\Controllers;

use App\Http\Requests\ResetPasswordRequest;
use App\Services\Facades\ResetPasswordFacade;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Password;

class ResetPasswordController extends Controller
{
    /**
     * Reset Password Page
     */
    public function resetPassword()
    {
        return ResetPasswordFacade::resetPassword();
    }

    /**
     * Send Reset Email Link
     */
    public function sendResetLinkEmail(ResetPasswordRequest $request)
    {
        return ResetPasswordFacade::sendResetLinkEmail($request);
    }

}
