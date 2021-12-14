import React from 'react';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import Registration from '../../components/Registration/Registration';
import SelectServices from '../../components/SelectServices/SelectServices';
import styles from './LandingPage.module.css';

function LandingPage(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <section className={styles.navBar}>
          <NavBar />
        </section>
      </div>
      <section id="services" className={styles.selectServices}>
        <SelectServices />
      </section>
      <div className={styles.out}>
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
