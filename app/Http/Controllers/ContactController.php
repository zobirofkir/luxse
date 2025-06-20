<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ContactController extends Controller
{
    /**
     * Contact Page
     */
    public function index()
    {
        return inertia("contacts/ContactPage");
    }
}
