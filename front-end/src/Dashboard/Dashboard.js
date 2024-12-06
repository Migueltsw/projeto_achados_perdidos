import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import BarraPesquisa from './BarraPesquisa';

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState('');

  const objetos = [
    { id: 1, nome: 'Objeto A', descricao: 'Uma camisa preta', categoria: 'Roupas', imgSrc: '/camisa-preta.jpg' },
    { id: 2, nome: 'Objeto B', descricao: 'Uma camisa preta', categoria: 'Roupas', imgSrc: '/camisa-preta.jpg' },
    { id: 3, nome: 'Objeto C', descricao: 'Uma camisa preta', categoria: 'Roupas', imgSrc: '/camisa-preta.jpg' },
  ];

  const filteredObjetos = objetos.filter((obj) => {
    const valores = Object.values(obj).join(' ').toLowerCase();

    return valores.includes(searchQuery.toLowerCase());
  });

  return (
    <>
      <div className="d-flex flex-column min-vh-100 justify-content-between mt-4">
        <Navbar />
        <BarraPesquisa searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        <div className="container mb-4 mt-3">
          <div className="row g-4 justify-content-center">
            {filteredObjetos.length > 0 ? (
              filteredObjetos.map((obj) => (
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3" key={obj.id}>
                  <div className="card h-100">
                    <img
                      src={obj.imgSrc}
                      className="card-img-top img-fluid"
                      alt={obj.nome}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{obj.nome}</h5>
                      <a href="/resgate" className="btn btn-success">
                        Resgatar
                      </a>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center">Nenhum objeto encontrado.</p>
            )}
          </div>
        </div>

        <Footer className="mb-4 mt-auto" />
      </div>
    </>
  );
}
