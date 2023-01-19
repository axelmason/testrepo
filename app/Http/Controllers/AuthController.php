<?php

namespace App\Http\Controllers;

use App\Services\LoginService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function loginPage()
    {
        return view('auth.login');
    }

    public function login(Request $r, LoginService $loginService)
    {
        $auth = $loginService->login($r);

        if ($auth) {
            return to_route('dashboard');
        }

        return back()->withErrors(['error' => 'Логин и пароль не совпадают.'])->withInput();
    }

    public function logout()
    {
        Auth::logout();

        return to_route('login');
    }
}
