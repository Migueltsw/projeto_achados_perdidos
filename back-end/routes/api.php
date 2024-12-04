<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\User;
use App\Http\Controllers\UserController;
use App\Models\Objeto;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

# Route::controller(objetoController::class)->group()
Route::prefix('/objetos')->name('objetos')->group(function() {
    Route::get('', function () {
        $objetos = Objeto::all();
        return $objetos;
    });

    Route::post('', function () {
        $nome = request()->input('nome');
        $foto = request()->input('foto');
        $descricao = request()->input('descricao');
        $data_encontrado = request()->input('dataencontrado');
        $data_limite = request()->input('datalimite');
        $objeto_entregue = request()->input('objetoentregue');

        $objeto = Objeto::create(
            ['nome' => $nome,
            'foto' => $foto,
            'descricao' => $descricao,
            'data_encontrado' => $dataencontrado,
            'data_limite' => $datalimite,
            'objeto_entregue' => $objeto_entregue,]
        );
        $corpo = ['location' => route('objetos.show', $objeto->id)];
        return response($corpo, 201);
    });

    Route::name('.show')->get('/{id}', function($id) {
        $objeto = Objeto::find($id);
        if ($objeto)
            return $objeto;
        else
            return response('', 404);
    });

    Route::delete('/{id}', function($id) {
        $objeto = Objeto::find($id);
        if ($objeto)
            $objeto->delete();
        else
            return response('', 404);
    });

    Route::put('/{id}', function($id) {
        $objeto = Objeto::find($id);
        if (!$objeto)
            return response('', 404);
        $nome = request()->input('nome');
        if ($nome)
            $objeto->nome = $nome;
        $foto = request()->input('foto');
        if ($foto)
            $objeto->foto = $foto;
        $descricao = request()->input('descricao');
        if ($descricao)
            $objeto->descricao = $descricao;
        $data_encontrado = request()->input('dataencontrado');
        if ($data_encontrado)
            $objeto->dataencontrado = $data_encontrado;
        $data_limite = request()->input('datalimite');
        if ($data_limite)
            $objeto->datalimite = $data_limite;
        $objeto_entregue = request()->input('objetoentregue');
        if ($objeto_entregue)
            $objeto->objetoentregue = $objeto_entregue;
        $objeto->save();    
    });

    Route::post('/resgatar', [UserController::class, 'salvaUser'])->name('resgatar');

});
