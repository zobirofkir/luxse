<?php

namespace App\Http\Controllers;

use App\Http\Resources\CurrentAuthUserResource;
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
        $user = $request->user()->load('profile');

        return inertia('auth/user/ProfilePage', [
            'auth' => CurrentAuthUserResource::make($user),
        ]);
    }

    /**
     * Met à jour le profil
     */
    public function update(Request $request)
    {
        $user = Auth::user();

        $validated = $request->validate([
            'first_name' => 'nullable|string|max:255',
            'last_name' => 'nullable|string|max:255',
            'username' => [
                'nullable',
                'string',
                'max:255',
                Rule::unique('profiles', 'username')->ignore($user->profile->id ?? null),
            ],
            'phone' => 'nullable|string|max:20',
            'avatar_file' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048', 
        ]);

        if ($request->hasFile('avatar_file')) {
            if ($user->profile && $user->profile->avatar_url) {
                Storage::disk('public')->delete($user->profile->avatar_url);
            }

            $path = $request->file('avatar_file')->store('avatars', 'public');
            $validated['avatar_url'] = $path; 
        }

        $user->profile()->updateOrCreate(
            ['user_id' => $user->id],
            $validated
        );

        return redirect()->back()->with('success', 'Profil mis à jour avec succès.');
    }
}
