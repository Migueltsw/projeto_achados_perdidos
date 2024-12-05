import React from 'react';
import Styles from './Home.module.css';
import { Link } from 'react-router-dom';

const BarraNavegacao = () => {
  return (
    <div className={Styles.BarraNavegacao}>
    <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">Achados e perdidos</a>
        <form class="form-inline">
        <Link to="/login"><button class="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button></Link>
        <Link to="/cadastro"><button class="btn btn-outline-success my-2 my-sm-0" type="submit">Registrar</button></Link>
        </form>
    </nav>
    </div>
  );
};

export default BarraNavegacao;