import React from 'react';
import Styles from './Home.module.css';

const BarraNavegacao = () => {
  return (
    <div>
    <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand">Achados e perdidos</a>
        <form class="form-inline">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Logar</button>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Registrar</button>
        </form>
    </nav>
    </div>
  );
};

export default BarraNavegacao;