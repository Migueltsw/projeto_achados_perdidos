export default function Create(){
    return(
        <form class="container justify-content-center align-items-center w-25 h-50 mt-5">
            <div class="form-group mb-3">
                <label class="form-label" for="Imagem"><b>URL da Imagem</b></label>
                <input class="form-control shadow-lg" type="text" name="img" placeholder="Digite a URL da imagem" required />
            </div>

            <div class="form-group mb-3">
                <label class="form-label" for="Nome"><b>Nome</b></label>
                <input class="form-control shadow-lg" type="text" name="nome" placeholder="Digite o nome do item" required />
            </div>

            <div class="form-group mb-3">
                <label class="form-label" for="Descricao"><b>Descricao</b></label>
                <input class="form-control shadow-lg" type="text" name="descricao" placeholder="Digite uma descricao" required />
            </div>

            <div class="form-group mb-5">
                <label class="form-label" for="Data"><b>Data Adicionada</b></label>
                <input class="form-control shadow-lg" type="date" name="data_cadastro" placeholder="Digite a data" required />
            </div>

            <div class="form-group mb-5">
                <label class="form-label" for="Data">Data Limite</label>
                <input class="form-control shadow-lg" type="date" name="data_limite" placeholder="Digite a data" required />
            </div>

            <center>
                <button type="submit" class="btn btn-success w-50 shadow-lg mb-4"><b>Cadastrar</b></button>
            </center>
        </form>
    
    );
}
