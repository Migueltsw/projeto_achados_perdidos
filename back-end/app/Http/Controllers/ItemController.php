<?php

namespace App\Http\Controllers;

use App\Models\Item;
use App\Models\Comentario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ItemController extends Controller
{

    public function create()
    {
        // Retorna a view que contém o formulário de criação de item
        return view('items.create');
    }

    /**
     * Armazena um novo recurso no banco de dados.
     */
    public function store(Request $request)
    {
        // Valida os dados enviados pelo formulário
        $request->validate([
            'nome' => 'required|string|max:255',
            'descricao' => 'required|string|max:1000',
            'data_cadastro' => 'required|date',
            'img' => 'required|url',
        ]);

        // Cria um novo item com os dados validados
        $item = Item::create([
            'nome' => $request->nome,
            'descricao' => $request->descricao,
            'data_cadastro' => $request->data_cadastro,
            'img' => $request->img,
            'user_id' => Auth::user()->id, // ID do usuário logado (relacionamento com usuário)
        ]);

        // Salva o item no banco de dados
        $item->save();

        // Redireciona o usuário para o painel principal após a criação
        return redirect('/dashboard');
    }

    /**
     * Exibe o formulário para edição de um recurso existente.
     */
    public function edit(Item $item)
    {
        // Retorna a view que contém o formulário de edição do item
        return view('items.edit', compact('item'));
    }

    /**
     * Atualiza um recurso existente no banco de dados.
     */
    public function update(Request $request, Item $item)
    {
        // Valida os dados enviados pelo formulário de edição
        $request->validate([
            'nome' => 'required|string|max:255',
            'descricao' => 'required|string|max:1000',
            'data_cadastro' => 'required|date',
            'img' => 'required|url',
        ]);

        // Atualiza os atributos do item com os dados validados
        $item->nome = $request->nome;
        $item->descricao = $request->descricao;
        $item->data_cadastro = $request->data_cadastro;
        $item->img = $request->img;
        $item->user_id = Auth::user()->id;

        $item->save();

        return redirect('/dashboard');
    }

    /**
     * Remove um recurso específico do banco de dados.
     */
    public function destroy(Item $item)
    {
        $item->delete();
        return redirect('/dashboard');
    }
}