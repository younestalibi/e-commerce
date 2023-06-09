<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class BaseController extends Controller
{
    protected function isAdmin(User $user)
    {
        return $user->role === 'admin';
    }
}
