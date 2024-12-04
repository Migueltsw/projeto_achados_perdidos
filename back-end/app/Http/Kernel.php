<?php

namespace App\Http;

use Illuminate\Foundation\Http\Kernel as HttpKernel;

class Kernel extends HttpKernel
{
    
    protected $middleware = [
       
    ];

    protected $middlewareGroups = [
        'web' => [
    
        ],

        'api' => [
            \Fruitcake\Cors\HandleCors::class,  
            'throttle:api',
            \Illuminate\Routing\Middleware\SubstituteBindings::class,
        ],
    ];

}