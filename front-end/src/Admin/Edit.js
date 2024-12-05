export default function Edit(){
    return(
        <form class="container justify-content-center align-items-center w-25 h-50 mt-5"> 
             <div class="form-group mb-3">
                <label class="form-label" for="Imagem">URL da Imagem</label>
                <input class="form-control shadow-lg" type="text" name="img" placeholder="Digite a URL da imagem" required value="{{$objeto->foto}}" />
            </div>

            <div class="form-group mb-3">
                <label class="form-label" for="Nome">Nome</label>
                <input class="form-control shadow-lg" type="text" name="nome" placeholder="Digite o nome do item" required value="{{$objeto->nome}}" />
            </div>

            <div class="form-group mb-3">
                <label class="form-label" for="Descricao">Descricao</label>
                <input class="form-control shadow-lg" type="text" name="descricao" placeholder="Digite uma descricao" required value="{{$pbjeto->descricao}}" />
            </div>

            <div class="form-group mb-5">
                <label class="form-label" for="Data">Data Adicionada</label>
                <input class="form-control shadow-lg" type="date" name="data_encontrado" placeholder="Digite a data" required value="{{$objeto->data_encontrado}}" />
            </div>

            <div class="form-group mb-5">
                <label class="form-label" for="Data">Data Limite</label>
                <input class="form-control shadow-lg" type="date" name="data_limite" placeholder="Digite a data" required value="{{$objeto->data_limite}}" />
            </div>

            <center>
                <button type="submit" class="btn btn-success w-50 shadow-lg mb-4"><b>Atualizar</b></button>
            </center>
        </form>
       
    );
}