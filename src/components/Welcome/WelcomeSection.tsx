import React from 'react';
import styles from './WelcomeSection.module.css';
import HandwerkerGesuchtSrc from '../../assets/Handwerker_gesucht.jpeg';

function WelcomeSection(): JSX.Element {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <section className={styles.home} id="home">
          <div className={styles.image}>
            <img src={HandwerkerGesuchtSrc} alt="Handwerker gesucht" />
          </div>
          <div className={styles.content}>
            <span>Jetzt die besten Handwerker finden</span>
            <a href="#" className={styles.btn}>
              los geht´s
            </a>
            <h3>alles was sie brauchen</h3>
          </div>
        </section>
      </div>
    </div>
  );
}

export default WelcomeSection;
