<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class Objeto extends Authenticatable
{
    use HasFactory, Notifiable;

    protected $fillable = [
        'nome',
        'foto',
        'descricao',
        'data_encontrado',
        'data_limite',
        'objeto_entregue'
    ];
}