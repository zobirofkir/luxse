<?php

namespace App\Services\Constructors;
use Illuminate\Http\Request;

interface ProfileConstructor
{
    /**
     * Affiche le profil de l'utilisateur connecté
     */
    public function index(Request $request);

    /**
     * Met à jour le profil
     */
    public function update(Request $request);
}