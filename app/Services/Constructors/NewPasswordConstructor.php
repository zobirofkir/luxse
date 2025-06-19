<?php

namespace App\Services\Constructors;

use App\Http\Requests\NewPasswordRequest;
use Illuminate\Http\Request;

interface NewPasswordConstructor
{
    /**
     * Create Password Form
     */
    public function create(Request $request, string $token);

    /**
     * New Password Request
     */
    public function store(NewPasswordRequest $request);
}