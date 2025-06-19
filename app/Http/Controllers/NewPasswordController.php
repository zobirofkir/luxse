<?php

namespace App\Http\Controllers;

use App\Http\Requests\NewPasswordRequest;
use App\Services\Facades\NewPasswordFacade;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;

class NewPasswordController extends Controller
{
    /**
     * Create Password Form
     */
    public function create(Request $request, string $token)
    {
        return NewPasswordFacade::create($request, $token);
    }

    /**
     * New Password Request
     */
    public function store(NewPasswordRequest $request)
    {
        return NewPasswordFacade::store($request);
    }
}
