<?php

namespace App\Services;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginService
{
    public function login(Request $r): bool
    {
        $r->validate([
            'login' => 'required',
            'password' => 'required'
        ]);

        return Auth::attempt(['login' => $r->login, 'password' => $r->password]);
    }
}
