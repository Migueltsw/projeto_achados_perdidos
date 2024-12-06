import { useState, useLayoutEffect, useRef } from 'react';

export default function Resgate() {
    const [nome, setNome] = useState('');
    const [matricula, setMatricula] = useState('');
    const [email, setEmail] = useState('');

    const [imageSize, setImageSize] = useState({ width: 400, height: 400 });
    const imageRef = useRef(null);

    useLayoutEffect(() => {
        if (imageRef.current) {
            imageRef.current.style.width = `${imageSize.width}px`;
            imageRef.current.style.height = `${imageSize.height}px`;
        }
    }, [imageSize]);

    const increaseSize = () => {
        setImageSize((prevSize) => ({
            width: prevSize.width + 60,
            height: prevSize.height + 60,
        }));
    };

    const decreaseSize = () => {
        setImageSize((prevSize) => ({
            width: prevSize.width - 60,
            height: prevSize.height - 60,
        }));
    };

    const resetSize = () => {
        setImageSize({ width: 400, height: 400 });
    };

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
        <form onSubmit={handleSubmit} className="container-fluid d-flex flex-column flex-md-row justify-content-between align-items-center w-100 mt-4">
            {/* Imagem do objeto */}
            <div className="col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-center mb-4 mb-md-0">
                <div className="bg-light border rounded shadow-sm d-flex justify-content-center align-items-center" style={{ maxWidth: "100%", maxHeight: "100%" }}>
                    <img
                        ref={imageRef}
                        src="/camisa-preta.jpg"
                        alt="Imagem do objeto"
                        className="img-fluid"
                        style={{ transition: 'width 0.3s ease, height 0.3s ease' }}
                    />
                </div>
                <div className="button-group mt-3">
                    <button type="button" className="btn btn-primary m-1" onClick={increaseSize}>Aumentar</button>
                    <button type="button" className="btn btn-secondary m-1" onClick={decreaseSize}>Diminuir</button>
                    <button type="button" className="btn btn-warning m-1" onClick={resetSize}>Redefinir</button>
                </div>
            </div>

            {/* Informações do objeto e formulário */}
            <div className="col-md-6 col-sm-12 d-flex flex-column">
                <h2 className="mt-4"><b>Camisa Preta</b></h2>

                {/* Descrição do objeto */}
                <div className="card my-3">
                    <div className="card-body">
                        <h5 className="card-title">Descrição</h5>
                        <p className="card-text">
                        A camisa preta é confeccionada em um tecido de alta qualidade, com uma textura suave e um acabamento fosco elegante que reflete discrição e estilo. A tonalidade preta é profunda e uniforme, transmitindo sofisticação e versatilidade, adequada para diversas ocasiões, tanto formais quanto casuais. O corte da camisa é moderno e ajustado, realçando a silhueta sem restringir os movimentos. Possui mangas longas com punhos fechados por botões discretos no mesmo tom, proporcionando um visual limpo e minimalista. A gola é clássica e estruturada, mantendo sua forma impecável mesmo após várias lavagens. A parte frontal apresenta uma fileira de botões ocultos por uma aba de tecido, reforçando o design minimalista. Uma pequena etiqueta na costura lateral, quase imperceptível, adiciona um toque de marca sutil. Nas costas, há um leve recorte central que ajuda na mobilidade e no ajuste perfeito ao corpo. O tecido é respirável e de fácil manutenção, com propriedades que evitam amassados, tornando a peça prática para o dia a dia ou viagens. Internamente, as costuras são reforçadas e bem acabadas, garantindo durabilidade e conforto ao longo do uso.
                        </p>
                    </div>
                </div>

                {/* Datas de encontro e doação */}
                <div className="row">
                    <div className="col-sm-6 mt-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Data de Encontro</h5>
                                <p className="card-text">08/11/2024</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 mt-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Data de Doação</h5>
                                <p className="card-text">27/11/2024</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Formulário */}
                <div className="row">
                    <div className="form-group mt-3">
                        <label className="form-label"><b>Nome</b></label>
                        <input className="form-control shadow-lg" type="text" placeholder="Nome" required value={nome} onChange={(e) => setNome(e.target.value)} />
                    </div>
                    <div className="form-group mt-3">
                        <label className="form-label"><b>Matrícula</b></label>
                        <input className="form-control shadow-lg" type="text" placeholder="Matrícula" required value={matricula} onChange={(e) => setMatricula(e.target.value)} />
                    </div>
                    <div className="form-group mt-3">
                        <label className="form-label"><b>Email</b></label>
                        <input className="form-control shadow-lg" type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                </div>

                {/* Botões */}
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