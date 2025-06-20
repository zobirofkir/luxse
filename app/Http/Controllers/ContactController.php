<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactRequest;
use App\Mail\ContactMail;
use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

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
        $validated = $request->validated();
        Contact::create($validated);
        Mail::send(new ContactMail($validated));
        return redirect()->back()->with('success', 'Message envoyé avec succès.');
    }
}
