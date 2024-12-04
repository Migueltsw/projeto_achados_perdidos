import Navbar from '../Dashboard/Navbar.js';
import Footer from '../Dashboard/Footer.js';

export default function DashboardAdmin() {
  return (
    <div className="d-flex flex-column min-vh-100 justify-content-between mt-4">
      <Navbar />
      
      <div className="container mb-4 mt-3">
        <div className="row g-4 justify-content-center mt-4">

          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card h-100">
              <img src="/camisa-preta.jpg" className="card-img-top img-fluid" alt="imagem" />
              <div className="card-body">
                <h5 className="card-title">Camisa Preta</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <div className="d-flex justify-content-center" style={{ gap: '15px' }}>
                  <a href="/edit" className="btn btn-warning">
                    Editar
                  </a>
                  <a href="#" className="btn btn-danger">
                    Excluir
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card h-100">
              <img src="/camisa-preta.jpg" className="card-img-top img-fluid" alt="imagem" />
              <div className="card-body">
                <h5 className="card-title">Camisa Preta</h5>
                <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <div className="d-flex justify-content-center" style={{ gap: '15px' }}>
                  <a href="/edit" className="btn btn-warning">
                    Editar
                  </a>
                  <a href="#" className="btn btn-danger">
                    Excluir
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-end mb-4">
        <button type="button" className="btn btn-success w-10 shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle-fill me-2" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z"/>
          </svg>
          <b>Ver mais</b>
        </button>
      </div>

      <Footer />
    </div>
  );
}