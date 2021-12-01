import React from 'react';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import Registration from '../../components/Registration/Registration';
import SelectServices from '../../components/SelectServices/SelectServices';
import WelcomeSection from '../../components/Welcome/WelcomeSection';
function LandingPage() {
  return (
    <div>
      <NavBar />
      <WelcomeSection />
      <SelectServices />
      <Registration />
      <Footer />
    </div>
  );
}
export default LandingPage;
