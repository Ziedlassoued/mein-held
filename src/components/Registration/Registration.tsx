import React from 'react';
import styles from './Registration.module.css';

function Registration(): JSX.Element {
  return (
    <section className={styles.wrapper}>
      <h2>Geschäftspartner</h2>
      <div className={styles.container}>
        <div className={styles.publicity}>
          <h3>Sie sind Handwerker?</h3>
          <h3>Gehen Sie Online</h3>
          <p>Wir helfen Ihnen Ihr Geschäft und Kundenstamm weiter auszubauen</p>
        </div>
        <img
          className={styles.MobileView}
          src="src/assets/Mobile_calendar.png"
          alt="mobile calendar"
        />
        <img
          className={styles.DesktopView}
          src="src/assets/Desktop_calendar.png"
          alt="Desktop calendar"
        />
        <button className={styles.application}>Partner werden</button>
      </div>
    </section>
  );
}
export default Registration;