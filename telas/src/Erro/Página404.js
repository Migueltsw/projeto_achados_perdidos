export default function Página404(){
    return (
        <div className="container d-flex flex-column justify-content-center align-items-center mt-5">
            <img src="/404.svg" alt="imagem" style={{width: '80 px', height: '70vh'}}/>
                <center>
                    <a href="/">
                        <button type="submit" class="btn btn-success w-15 shadow-lg mb-4"><b>Voltar</b></button>
                    </a>
                </center>
        </div>
    );
}