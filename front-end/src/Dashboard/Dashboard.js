import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import BarraPesquisa from './BarraPesquisa';

export default function Dashboard() {
  return (
    <>
      <div className="d-flex flex-column min-vh-100 justify-content-between mt-4">
        <Navbar />
        <BarraPesquisa />

        {/*cards */}
        <div className="container mb-4 mt-3">
          <div className="row g-4 justify-content-center">
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
              <div className="card h-100">
                <img
                  src="/camisa-preta.jpg"
                  className="card-img-top img-fluid"
                  alt="Objeto A"
                />
                <div className="card-body">
                  <h5 className="card-title">Objeto A</h5>
                  <a href="/resgate" className="btn btn-success">
                    Resgatar
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
              <div className="card h-100">
                <img
                  src="/camisa-preta.jpg"
                  className="card-img-top img-fluid"
                  alt="Objeto B"
                />
                <div className="card-body">
                  <h5 className="card-title">Objeto B</h5>
                  <a href="/resgate" className="btn btn-success">
                    Resgatar
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
              <div className="card h-100">
                <img
                  src="/camisa-preta.jpg"
                  className="card-img-top img-fluid"
                  alt="Objeto C"
                />
                <div className="card-body">
                  <h5 className="card-title">Objeto C</h5>
                  <a href="/resgate" className="btn btn-success">
                    Resgatar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="d-flex justify-content-end">
          <button type="submit" class="btn btn-success w-10 shadow-lg mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle-fill me-2" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z"/>
            </svg>
            <b>Ver mais</b>
          </button>
        </div>

        <Footer className="mb-4 mt-auto" />
      </div>
    </>
  );
}
