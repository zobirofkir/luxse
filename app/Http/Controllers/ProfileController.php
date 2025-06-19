<?php

namespace App\Http\Controllers;

use App\Http\Resources\CurrentAuthUserResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProfileController extends Controller
{
    /**
     * Affiche les données du profil de l'utilisateur connecté
     */
    public function index(Request $request)
    {
        $user = $request->user()->load('profile');

        return inertia('auth/user/ProfilePage', [
            'auth' => CurrentAuthUserResource::make($user),
        ]);
    }

    /**
     * Met à jour le profil de l'utilisateur connecté
     */
    public function update(Request $request)
    {
        $user = Auth::user();

        $validated = $request->validate([
            'first_name' => 'nullable|string|max:255',
            'last_name' => 'nullable|string|max:255',
            'username' => 'nullable|string|max:255|unique:profiles,username,' . ($user->profile->id ?? 'null'),
            'phone' => 'nullable|string|max:20',
            'avatar_url' => 'nullable|url',
        ]);

        $user->profile()->updateOrCreate(
            ['user_id' => $user->id],
            $validated
        );

        return redirect()->back()->with('success', 'Profil mis à jour avec succès.');
    }
}
