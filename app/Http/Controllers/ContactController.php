<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactRequest;
use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    /**
     * Afficher la page de contact
     */
    public function index()
    {
        return inertia('contacts/ContactPage');
    }

    /**
     * Enregistrer un message de contact
     */
    public function store(ContactRequest $request)
    {
        Contact::create($request->validated());
        return redirect()->back()->with('success', 'Message envoyé avec succès.');
    }
}
