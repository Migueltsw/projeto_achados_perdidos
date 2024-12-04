import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import BarraPesquisa from './BarraPesquisa';

import {
  MDBBtn,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

export default function Dashboard() {
  return (
    <>
      <div className="d-flex flex-column min-vh-100 justify-content-between mt-4">
        <Navbar />
        <BarraPesquisa />

        {/* Container de cards, agora com centralização */}
        <MDBRow className="d-flex justify-content-center g-4 mb-4 mt-3">
          <MDBCol xs={12} sm={6} md={4} lg={3}> {/* Ajuste as larguras conforme necessário */}
            <MDBCard className="h-100">
              <MDBCardImage
                src="/camisa-preta.jpg"
                alt="Objeto A"
                position="top"
                className="img-fluid"
              />
              <MDBCardBody>
                <MDBCardTitle>Objeto A</MDBCardTitle>
                <a href="/resgate">
                  <MDBBtn color="success">Resgatar</MDBBtn>
                </a>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol xs={12} sm={6} md={4} lg={3}>
            <MDBCard className="h-100">
              <MDBCardImage
                src="/camisa-preta.jpg"
                alt="Objeto B"
                position="top"
                className="img-fluid"
              />
              <MDBCardBody>
                <MDBCardTitle>Objeto B</MDBCardTitle>
                <a href="/resgate">
                  <MDBBtn color="success">Resgatar</MDBBtn>
                </a>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol xs={12} sm={6} md={4} lg={3}>
            <MDBCard className="h-100">
              <MDBCardImage
                src="/camisa-preta.jpg"
                alt="Objeto C"
                position="top"
                className="img-fluid"
              />
              <MDBCardBody>
                <MDBCardTitle>Objeto C</MDBCardTitle>
                <a href="/resgate">
                  <MDBBtn color="success">Resgatar</MDBBtn>
                </a>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>

        <Footer className="mb-4 mt-auto" />
      </div>
    </>
  );
}
