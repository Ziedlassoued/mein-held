import React from 'react';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import Registration from '../../components/Registration/Registration';
import styles from './LandingPage.module.css';
import WelcomeSection from '../../components/Welcome/WelcomeSection';
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
        <Card />
      </section>
      <div className={styles.out} id="registration">
        <section className={styles.registration}>
          <Registration />
        </section>
        <section className={styles.footer}>
          <Footer />
        </section>
      </div>
    </div>
  );
}
export default LandingPage;
