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
  MDBCardFooter,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

export default function Dashboard() {
  return (
    <>
     <div className='d-flex flex-column min-vh-100 justify-content-between'>
      <Navbar />
     <BarraPesquisa />
      <MDBRow className='row-cols-1 row-cols-md-5 justify-content-center g-4 mb-4 mt-3'>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/044.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Objeto A</MDBCardTitle>
            <MDBBtn color='success'>Resgatar</MDBBtn>
          </MDBCardBody>
          <MDBCardFooter>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </MDBCardFooter>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/043.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Objeto B</MDBCardTitle>
            <MDBBtn color='success'>Resgatar</MDBBtn>
          </MDBCardBody>
          <MDBCardFooter>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </MDBCardFooter>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/042.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Objeto C</MDBCardTitle>
            <MDBBtn color='success'>Resgatar</MDBBtn>
          </MDBCardBody>
          <MDBCardFooter>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </MDBCardFooter>
        </MDBCard>
      </MDBCol>
      </MDBRow>
      <Footer className='mb-4 mt-auto'/>
  </div>
  </>
  );
}