import React, { useEffect, useState } from 'react';
import SuapClient from './SuapClient';
import 'bulma/css/bulma.min.css';

const ClienteSUAP = () => {
  const [userData, setUserData] = useState({
    identificacao: '',
    nome: '',
    email: '',
    campus: '',
  });

  const CLIENT_ID = 'L3yhCvfRrcyZAChqJ4sOCphWinpQ8YB2cUOzaHXc7cE';
  const REDIRECT_URI = 'http://localhost:8000/';
  const SUAP_URL = 'https://suap.ifrn.edu.br';
  const SCOPE = 'identificacao email documentos_pessoais';

  useEffect(() => {
    const suap = new SuapClient(SUAP_URL, CLIENT_ID, REDIRECT_URI, SCOPE);
    suap.init();

    if (suap.isAuthenticated()) {
      const scope = suap.getToken().getScope();
      suap.getResource(scope, (response) => {
        setUserData({
          identificacao: response.identificacao,
          nome: response.nome,
          email: response.email,
          campus: response.campus,
        });
      });
    } else {
      suap.logout();
      window.location.href = 'login.html'; 
    }
  }, []);

  const handleLogout = () => {
    const suap = new SuapClient(SUAP_URL, CLIENT_ID, REDIRECT_URI, SCOPE);
    suap.logout();
    window.location.href = 'login.html';
  };

  return (
    <div>
      <HeroSection />
      <section className="section">
        <div className="container">
          <div className="is-authenticated content">
            <LogoutButton onLogout={handleLogout} />
            <UserInfo userData={userData} />
          </div>
        </div>
      </section>
    </div>
  );
};

const HeroSection = () => (
  <section className="hero is-link is-bold">
    <div className="hero-body">
      <div className="container">
        <h1 className="title">Dados de Login</h1>
      </div>
    </div>
  </section>
);

const UserInfo = ({ userData }) => (
  <div>
    <p><strong>Identificação: </strong>{userData.identificacao}</p>
    <p><strong>Nome: </strong>{userData.nome}</p>
    <p><strong>Email: </strong>{userData.email}</p>
    <p><strong>Campus: </strong>{userData.campus}</p>
  </div>
);

const LogoutButton = ({ onLogout }) => (
  <p>
    <button type="button" className="button is-danger" onClick={onLogout}>
      Encerrar Sessão
    </button>
  </p>
);

export default ClienteSUAP;
