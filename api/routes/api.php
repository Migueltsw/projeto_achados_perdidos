<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Objeto;
use App\Models\Aviso;
use App\Models\Categoria;
use App\Models\TiposUser;

/*
|----------------------------------------------------------------------
| API Routes
|----------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
     return $request->user();
});

Route::prefix('/objetos')->name('objetos')->group(function() {
    Route::get('', function () {
        return Objeto::all();
    });

    Route::post('', function () {
        $nome = request()->input('nome');
        $foto = request()->input('foto');
        $descricao = request()->input('descricao');
        $data_encontrado = request()->input('data_encontrado');
        $data_limite = request()->input('data_limite');
        $objeto_entregue = request()->input('objeto_entregue');

        $objeto = Objeto::create([
            'nome' => $nome,
            'foto' => $foto,
            'descricao' => $descricao,
            'data_encontrado' => $data_encontrado,
            'data_limite' => $data_limite,
            'objeto_entregue' => $objeto_entregue,
        ]);

        $corpo = ['location' => route('objetos.show', $objeto->id)];
        return response($corpo, 201);
    });

    Route::name('.show')->get('/{id}', function($id) {
        $objeto = Objeto::find($id);
        if ($objeto) {
            return $objeto;
        } else {
            return response('', 404);
        }
    });

    Route::delete('/{id}', function($id) {
        $objeto = Objeto::find($id);
        if ($objeto) {
            $objeto->delete();
        } else {
            return response('', 404);
        }
    });

    Route::put('/{id}', function($id) {
        $objeto = Objeto::find($id);
        if (!$objeto) {
            return response('', 404);
        }
        
        $nome = request()->input('nome');
        if ($nome) {
            $objeto->nome = $nome;
        }
        
        $foto = request()->input('foto');
        if ($foto) {
            $objeto->foto = $foto;
        }
        
        $descricao = request()->input('descricao');
        if ($descricao) {
            $objeto->descricao = $descricao;
        }
        
        $data_encontrado = request()->input('data_encontrado');
        if ($data_encontrado) {
            $objeto->data_encontrado = $data_encontrado;
        }
        
        $data_limite = request()->input('data_limite');
        if ($data_limite) {
            $objeto->data_limite = $data_limite;
        }
        
        $objeto_entregue = request()->input('objeto_entregue');
        if ($objeto_entregue) {
            $objeto->objeto_entregue = $objeto_entregue;
        }
        
        $objeto->save();
    });
});

Route::prefix('/avisos')->name('avisos')->group(function() {
    Route::get('', function () {
        return Aviso::all();
    });

    Route::post('', function () {
        $comunicado = request()->input('comunicado');
        $importante = request()->input('importante');
       
        $aviso = Aviso::create([
            'comunicado' => $comunicado,
            'importante' => $importante,
        ]);

        $corpo = ['location' => route('avisos.show', $aviso->id)];
        return response($corpo, 201);
    });

    Route::name('.show')->get('/{id}', function($id) {
        $aviso = Aviso::find($id);
        if ($aviso) {
            return $aviso;
        } else {
            return response('', 404);
        }
    });

    Route::delete('/{id}', function($id) {
        $aviso = Aviso::find($id);
        if ($aviso) {
            $aviso->delete();
        } else {
            return response('', 404);
        }
    });

    Route::put('/{id}', function($id) {
        $aviso = Aviso::find($id);
        if (!$aviso) {
            return response('', 404);
        }
        
        $comunicado = request()->input('comunicado');
        if ($comunicado) {
            $aviso->comunicado = $comunicado;
        }
        
        $importante = request()->input('importante');
        if ($importante) {
            $aviso->importante = $importante;
        }
        
        $aviso->save();
    });
});

Route::prefix('/categorias')->name('categorias')->group(function() {
    
    Route::get('', function () {
        return Categoria::all();
    });

    Route::post('', function () {
        $nome = request()->input('nome');
        
        $categoria = Categoria::create([
            'nome' => $nome,
        ]);

        $corpo = ['location' => route('categorias.show', $categoria->id)];
        return response($corpo, 201);
    });

    Route::name('.show')->get('/{id}', function($id) {
        $categoria = Categoria::find($id);
        if ($categoria) {
            return $categoria;
        } else {
            return response('', 404);
        }
    });

    Route::delete('/{id}', function($id) {
        $categoria = Categoria::find($id);
        if ($categoria) {
            $categoria->delete();
            return response('', 204);
        } else {
            return response('', 404);
        }
    });

    Route::put('/{id}', function($id) {
        $categoria = Categoria::find($id);
        if (!$categoria) {
            return response('', 404);
        }
        
        $nome = request()->input('nome');
        if ($nome) {
            $categoria->nome = $nome;
        }
        
        $categoria->save();
    });
});

Route::prefix('/tiposuser')->name('tiposuser')->group(function() {
    
    Route::get('', function () {
        return TiposUser::all();
    });

    Route::post('', function () {
        $descricao = request()->input('descricao');
        
        $tiposUser = TiposUser::create([
            'descricao' => $descricao,
        ]);

        $corpo = ['location' => route('tiposuser.show', $tiposUser->id)];
        return response($corpo, 201);
    });

    Route::name('.show')->get('/{id}', function($id) {
        $tiposUser = TiposUser::find($id);
        if ($tiposUser) {
            return $tiposUser;
        } else {
            return response('', 404);
        }
    });

    Route::delete('/{id}', function($id) {
        $tiposUser = TiposUser::find($id);
        if ($tiposUser) {
            $tiposUser->delete();
            return response('', 204);
        } else {
            return response('', 404);
        }
    });

    Route::put('/{id}', function($id) {
        $tiposUser = TiposUser::find($id);
        if (!$tiposUser) {
            return response('', 404);
        }
        
        $descricao = request()->input('descricao');
        if ($descricao) {
            $tiposUser->descricao = $descricao;
        }
        
        $tiposUser->save();
    });
});
