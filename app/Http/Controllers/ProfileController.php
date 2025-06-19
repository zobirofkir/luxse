<?php

namespace App\Http\Controllers;

use App\Http\Resources\CurrentAuthUserResource;
use App\Services\Facades\ProfileFacade;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;

class ProfileController extends Controller
{
    /**
     * Affiche le profil de l'utilisateur connecté
     */
    public function index(Request $request)
    {
        return ProfileFacade::index($request);
    }

    /**
     * Met à jour le profil
     */
    public function update(Request $request)
    {
        return ProfileFacade::update($request);
    }

}
