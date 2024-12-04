import { useState } from 'react';

export default function Resgate() {

    const [nome, setNome] = useState('');
    const [matricula, setMatricula] = useState('');
    const [email, setEmail] = useState('');

    const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('/resgatar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': csrfToken
            },
            body: JSON.stringify({
                nome,
                email, 
            }),
        });

        

        if (response.ok) {
            alert('E-mail enviado com sucesso! Verifique sua caixa de entrada.');
        } else {
            alert('Não foi possível enviar o e-mail. Por favor, tente novamente mais tarde.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="container d-flex justify-content-start align-items-center w-100">
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <div className="d-flex justify-content-center align-items-center bg-light border rounded shadow-sm" style={{ maxWidth: "100%", maxHeight: "100%" }}>
                        <img src="/camisa-preta.jpg" alt="Imagem do objeto" className="img-fluid" />
                    </div>
                </div>
            </div>

            <div className="col-md-6 d-flex flex-column">
                <h2 className="mt-4"><b>Camisa Preta</b></h2>

                <div className="card my-3" style={{ width: "400px" }}>
                    <div className="card-body">
                        <h5 className="card-title">Descrição</h5>
                        <p className="card-text">
                            Lorem ipsum dolor sit amet. In voluptas numquam qui illo doloribus qui inventore rerum aut maxime nulla quo error modi. Sed saepe cumque et ipsam aperiam vel ullam fuga cum quisquam consequatur. Sed dolore laborum hic corrupti autem est nesciunt dolor ut veniam enim.
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-6 mt-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Data de Encontro</h5>
                                <p className="card-text">01/01/2001</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 mt-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Data de Doação</h5>
                                <p className="card-text">02/02/2001</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="form-group mt-3">
                        <label className="form-label"><b>Nome</b></label>
                        <input className="form-control shadow-lg" type="text" placeholder="Nome" required value={nome} onChange={(e) => setNome(e.target.value)} />
                    </div>
                    <div className="form-group mt-3">
                        <label className="form-label"><b>Matrícula</b></label>
                        <input className="form-control shadow-lg"  type="text" placeholder="Matrícula" required value={matricula} onChange={(e) => setMatricula(e.target.value)} />
                    </div>
                    <div className="form-group mt-3">
                        <label className="form-label"><b>Email</b></label>
                        <input className="form-control shadow-lg" type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-6 mt-5 btn-group-toggle">
                        <button type="submit" className="btn btn-success w-100 shadow-lg mb-4"><b>Resgatar</b></button>
                    </div>
                    <div className="col-sm-6 mt-5 btn-group-toggle">
                        <a href='/dashboard'>
                            <button type="button" className="btn btn-danger w-100 shadow-lg mb-4"><b>Sair</b></button>
                        </a>
                    </div>
                </div>
            </div>
        </form>
    );
}
