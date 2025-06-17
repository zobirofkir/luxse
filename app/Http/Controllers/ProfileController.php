<?php

namespace App\Http\Controllers;

use App\Http\Resources\CurrentAuthUserResource;
use Illuminate\Http\Request;

class ProfileController extends Controller
{
    /**
     * List Current Auth User
     */
    public function index(Request $request)
    {
        return inertia('auth/user/ProfilePage', [
            'auth' => CurrentAuthUserResource::make($request->user()),
        ]);
    }
}
