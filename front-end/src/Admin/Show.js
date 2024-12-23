export default function Show(){
    return(
        <div class="container my-5">
        <div class="row">
            <div class="col-md-4">
                <div class="card" style="transition: none;">
                    <img src="{{$item->img}}" class="card-img-top" alt="{{$objeto->nome}}" />
                    <div class="card-body">
                        <h2 class="card-title">Nome: </h2>
                        <p class="card-text"><b>Descrição: </b></p>
                        <p class="card-text"><b>Data adicionada: </b><i></i></p>
                    </div>
                </div>
            </div>
            <div class="col-md-8">
                <div class="container mt-4">
                    <h3>Comentários</h3>
                    <ul class="list-group">
                        {/* @foreach($comentarios as $comentario) */}
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                <div>
                                    {/* <strong>{{ $comentario->user->name }}:</strong> */}
                                    {/* <p>{{ $comentario->texto }}</p> */}
                                </div>
                                
                                {/* @if ($comentario->user_id === Auth::user()->id) */}
                                    <form action="{{url('/item/'. $comentario->id . '/coment/delete')}}" method="POST" class="mb-0">
                                        @csrf
                                        {/* @method('DELETE') */}
                                        <button class="btn btn-danger btn-sm" type="submit"><svg xmlns="http://www.w3.org/2000/svg" height="3.5vh" viewBox="0 -960 960 960" width="3.5vh" fill="#FFFFFF"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg></button>
                                    </form>
                                {/* @endif */}
                            </li>
                        {/* @endforeach */}
                    </ul>
                </div>                
                <div class="container mt-4">
                    <h3>Deixe seu comentário</h3>
                    <form action="{{ url('/item/' . $item->id . '/coment') }}" method="POST" class="d-flex">
                        @csrf
                        <div class="form-group flex-grow-1 me-2">
                            <textarea class="form-control" id="comentario" name="texto" rows="1" placeholder="Escreva um comentário"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Enviar</button>
                    </form>
                </div>                                
            </div>
        </div>
    </div>
    );
}
