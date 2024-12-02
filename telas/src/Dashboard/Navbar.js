import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'; 
import { faUser } from '@fortawesome/free-solid-svg-icons';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
} from 'mdb-react-ui-kit';

library.add(faUser);


export default function Navbar() {
  return (
      <MDBNavbar fixed='top' light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>Projeto Achados e Perdidos </MDBNavbarBrand>
          <FontAwesomeIcon icon={faUser} size='2x'/>
        </MDBContainer>
      </MDBNavbar>
   );
}