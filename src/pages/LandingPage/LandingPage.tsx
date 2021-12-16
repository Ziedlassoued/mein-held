import React from 'react';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import Registration from '../../components/Registration/Registration';
import SelectServices from '../../components/SelectServices/SelectServices';
import styles from './LandingPage.module.css';
import WelcomeSection from '../../components/Welcome/WelcomeSection';
import SimplePaper from '../../components/ServiceCard/ServiceCard';
import BasicCard from '../../components/ServiceCard/ServiceCard2';
import MultiActionAreaCard from '../../components/ServiceCard/ServiceCardImage';
import Card from '../../components/Card/Card';

function LandingPage(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <section className={styles.navBar}>
          <NavBar />
        </section>
        <section className={styles.welcome}>
          <WelcomeSection />
        </section>
      </div>
      <section id="services" className={styles.selectServices}>
        <SelectServices />
        <Card />
      </section>
      <div className={styles.out}>
        <section className={styles.registration}>
          <Registration />
        </section>
        <section className={styles.footer}>
          <SimplePaper />
          <BasicCard />
          <MultiActionAreaCard />
          <Footer />
        </section>
      </div>
    </div>
  );
}
export default LandingPage;
