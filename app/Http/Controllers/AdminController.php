<?php

namespace App\Http\Controllers;

use App\Models\Company;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function dashboard()
    {
        $companies = Company::all();

        return view('dashboard', compact('companies'));
    }
}
