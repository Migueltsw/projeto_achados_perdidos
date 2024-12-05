import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='dark' className='text-center text-lg-left'>
      <div 
        className='text-center p-3 text-light' 
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
      >
        <p className="m-0" style={{ fontSize: '14px' }}>
          &copy; {new Date().getFullYear()}
          <a 
            className='text-light' 
            href='https://mdbootstrap.com/' 
            style={{ textDecoration: 'none', padding: '0 10px' }}
          >
            Projeto Achados e Perdidos
          </a>
        </p>
      </div>
    </MDBFooter>
  );
}
