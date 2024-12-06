import React from 'react';
import Styles from './Home.module.css';
import { Link } from 'react-router-dom';
import logoimg from './img/LOGOpi.png';

const BarraNavegacao = () => {
  return (
    <div className={Styles.BarraNavegacao}>
    <nav class="navbar navbar-light bg-light">
        <img 
          src={logoimg} 
          alt="Logo" 
          style={{
            height: '70px', // Ajusta a altura da logo
            width: 'auto',  // Mantém a proporção
          }} 
        />
        <form class="form-inline">
        <Link to="/login"><button class="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button></Link>
        <Link to="/cadastro"><button class="btn btn-outline-success my-2 my-sm-0" type="submit">Registrar</button></Link>
        </form>
    </nav>
    </div>
  );
};

export default BarraNavegacao;