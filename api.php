<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Models\Animal;

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

# Route::controller(AnimalController::class)->group()
Route::prefix('/animais')->name('animais')->group(function() {
    Route::get('', function () {
        $animais = Animal::all();
        return $animais;
    });

    Route::post('', function () {
        $nome = request()->input('nome');
        $peso = request()->input('peso');
        $animal = Animal::create(
            ['nome' => $nome,
            'peso' => $peso]
        );
        $corpo = ['location' => route('animais.show', $animal->id)];
        return response($corpo, 201);
    });

    Route::name('.show')->get('/{id}', function($id) {
        $animal = Animal::find($id);
        if ($animal)
            return $animal;
        else
            return response('', 404);
    });

    Route::delete('/{id}', function($id) {
        $animal = Animal::find($id);
        if ($animal)
            $animal->delete();
        else
            return response('', 404);
    });

    Route::put('/{id}', function($id) {
        $animal = Animal::find($id);
        if (!$animal)
            return response('', 404);
        $nome = request()->input('nome');
        if ($nome)
            $animal->nome = $nome;
        $peso = request()->input('peso');
        if ($peso)
            $animal->peso = $peso;
        $animal->save();    
    });
});
