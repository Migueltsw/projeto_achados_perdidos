export default function Cadastro() {
    return (
        <form className="container d-flex justify-content-center align-items-center mt-5">
            <div className="col-md-6 col-lg-4">

                <div className="form-group mb-3">
                    <h2>Cadastro Admin </h2> 
                </div>

                <div className="form-group mb-3">
                    <label className="form-label" htmlFor="Nome"><b>Nome:</b></label>
                    <input className="form-control shadow-lg" type="text" name="name" placeholder="Digite o Nome" required />       
                </div>

                <div className="form-group mb-3">
                    <label className="form-label" htmlFor="Email"><b>E-mail:</b></label>
                    <input className="form-control shadow-lg" type="email" name="email" placeholder="Digite o Email" required />
                </div>

                <div className="form-group mb-3">
                    <label className="form-label" htmlFor="Password"><b>Senha:</b></label>
                    <input className="form-control shadow-lg" type="password" name="password" placeholder="Digite a Senha" required />
                </div>

                <div className="form-group mb-5">
                    <label className="form-label" htmlFor="Password_confirmation"><b>Confirmar Senha:</b></label>
                    <input className="form-control shadow-lg" type="password" name="password_confirmation" placeholder="Confirme a Senha" required />
                </div>

                <div className="text-center">
                    <button type="submit" className="btn btn-success w-100 shadow-lg mb-4"><b>Cadastrar-se</b></button>
                    <p>Você já tem uma conta? <a href="/login" className="text-decoration-none link-success"><b>Login</b></a></p>
                </div>
            </div>
        </form>
    );
}
