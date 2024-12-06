import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'; 
import { faUser } from '@fortawesome/free-solid-svg-icons';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
} from 'mdb-react-ui-kit';

// Importando a logo
import logoimg from '../home/img/LOGOpi.png';

library.add(faUser);

export default function Navbar() {
  return (
    <MDBNavbar fixed='top' light bgColor='light'>
      <MDBContainer fluid>
        {/* Logo no canto esquerdo */}
        <img 
          src={logoimg} 
          alt="Logo" 
          style={{
            height: '50px',  // Ajusta a altura da logo
            width: 'auto',   // Mantém a proporção
            marginRight: '15px',  // Espaçamento entre a logo e o título
          }} 
        />
        <FontAwesomeIcon icon={faUser} size='2x'/>
      </MDBContainer>
    </MDBNavbar>
  );
}
