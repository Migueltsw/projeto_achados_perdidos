import React, { useEffect, useState } from 'react';
import { SuapClient } from './Cliente.js';
import './login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BarraNavegacao from './BarraNavegacao';

export default function Login() {
  const CLIENT_ID = '7xyE7MSEcbUJkUGyjjOWT45zViyrzFZRDzBAzfkp';
  const HOME_URI = 'http://localhost:5000';
  const REDIRECT_URI = `${HOME_URI}/loggedin`;
  const SUAP_URL = 'https://suap.ifrn.edu.br';
  const SCOPE = 'identificacao email documentos_pessoais';

  console.log(SUAP_URL, CLIENT_ID, HOME_URI, REDIRECT_URI, SCOPE);

  const [suap, setSuap] = useState(null);

  useEffect(() => {
    const suapClient = new SuapClient(
      SUAP_URL, CLIENT_ID, HOME_URI, REDIRECT_URI, SCOPE
    );
    setSuap(suapClient);
  }, []);

  const handleLoginClick = () => {
    if (suap) {
      window.location.href = suap.getLoginURL();
    }
  };

  const handleSecondaryLoginClick = () => {
    // Redireciona para a rota /dashboard
    window.location.href = '/dashboard';
  };

  return (
    <div>
      <BarraNavegacao />
      <form className="container d-flex justify-content-center align-items-center mt-5" style={{ minHeight: '100vh' }}>
        <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4">
          <div className="form-group mb-3">
            <label className="form-label" htmlFor="Email">Email</label>
            <input className="form-control shadow-lg" type="email" name="email" placeholder="Digite o Email" required />
          </div>

          <div className="form-group mb-5">
            <label className="form-label" htmlFor="Password">Senha</label>
            <input className="form-control shadow-lg" type="password" name="password" placeholder="Digite a Senha" required />
          </div>

          <div className="text-center">
            
            <button 
              type="button" 
              onClick={handleSecondaryLoginClick} 
              className="btn btn-secondary w-100 shadow-lg mb-4"
            >
              Login
            </button>

            <button type="button" onClick={handleLoginClick} className="btn btn-success w-100 shadow-lg mb-4">
              Login com SUAP
            </button>

            <p>Não tem uma conta? <a href='/cadastro' className="text-decoration-none link-success"><b>Cadastra-se</b></a></p>
          </div>
        </div>
      </form>
    </div>
  );
}
