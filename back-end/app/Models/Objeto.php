<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Objeto extends Model
{
    use HasFactory;

    protected $fillable = [
        'nome',
        'foto',
        'descricao',
        'data_encontrado',
        'data_limite',
        'objeto_entregue'
    ];
}