import React from 'react';
import styles from './WelcomeSection.module.css';
import HandwerkerGesuchtSrc from '../../assets/Handwerker_gesucht.jpeg';
import HandwerkerWelcomeSrc from '../../assets/Handwerker_welcome.jpeg';

function WelcomeSection(): JSX.Element {
  return (
    <section className={styles.welcome}>
      <button className={styles.btnWelcome}>
        Jetzt die besten Handwerker finden
      </button>
      <div className={styles.container}>
        <img
          className={styles.images}
          src={HandwerkerGesuchtSrc}
          alt="handwerker gesucht"
        />
        <div>
          <img
            className={styles.images}
            src={HandwerkerWelcomeSrc}
            alt="welcome"
          />
        </div>
      </div>
    </section>
  );
}
export default WelcomeSection;
