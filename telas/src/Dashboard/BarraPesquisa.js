export default function BarraPesquisa(){
    return(
        <div class="container input-group mt-5 w-25 justify-content-center align-items-center">
            <input type="text" class="form-control" placeholder="Pesquisar" />
            <div class="input-group-append w-25">
                <button class="btn btn-dark" type="button">
                    <i class="fa fa-search"></i>
                </button>
            </div>
        </div>
    );
}