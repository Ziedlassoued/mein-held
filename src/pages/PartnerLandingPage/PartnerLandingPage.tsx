import React from 'react';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';

function PartnerLandingPage(): JSX.Element {
  const companyName = localStorage.getItem('current user');

  return (
    <div>
      <NavBar />
      <div>Guten Tag {companyName}</div>
      <Footer />
    </div>
  );
}

export default PartnerLandingPage;
