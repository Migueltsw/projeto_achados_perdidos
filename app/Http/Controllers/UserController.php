<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Notifications\notificaUser;

class UserController extends Controller
{
    public function salvaUser(Request $request){

        $request->validate([
            'email' => 'required|email|unique:users,email',
            'nome' => 'required|string|max:255',
        ]);
        
        $user = new User();
        $user->Email = $request->email;
        $user->password = bcrypt(123456);
        $user->name = $request->nome;
        $user->save();

        $user->notify(new notificaUser($user));
        return response()->json(['message' => 'Usuário criado com sucesso e notificação enviada!'], 201);
    }

}