export default function Página404() {
    return (
        <div className="container d-flex flex-column justify-content-center align-items-center mt-5">
            <img src="/404.svg" alt="Imagem 404" className="img-fluid" style={{maxWidth: '100%', height: 'auto'}}/>
            <div className="mt-4">
                <a href="/">
                    <button type="submit" className="btn btn-success btn-lg shadow-lg mb-4">
                        <b>Voltar</b>
                    </button>
                </a>
            </div>
        </div>
    );
}
