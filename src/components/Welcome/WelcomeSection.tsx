import React from 'react';
import styles from './WelcomeSection.module.css';

function WelcomeSection(): JSX.Element {
  return (
    <section className={styles.welcome}>
      <button>Jetzt die besten Handwerker finden</button>
      <div className={styles.container}>
        <img
          src="src/assets/Handwerker_gesucht.jpeg"
          alt="handwerker gesucht"
        />
        <div>
          <img src="src/assets/Handwerker_welcome.jpeg" alt="welcome" />
          <button>Partner werden</button>
        </div>
      </div>
    </section>
  );
}
export default WelcomeSection;
