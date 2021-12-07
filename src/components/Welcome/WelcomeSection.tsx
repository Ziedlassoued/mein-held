import React from 'react';
import styles from './WelcomeSection.module.css';

function WelcomeSection(): JSX.Element {
  return (
    <section className={styles.welcome}>
      <button className={styles.btnWelcome}>
        Jetzt die besten Handwerker finden
      </button>
      <div className={styles.container}>
        <img
          className={styles.images}
          src="src/assets/Handwerker_gesucht.jpeg"
          alt="handwerker gesucht"
        />
        <div>
          <img
            className={styles.images}
            src="src/assets/Handwerker_welcome.jpeg"
            alt="welcome"
          />
        </div>
      </div>
    </section>
  );
}
export default WelcomeSection;
