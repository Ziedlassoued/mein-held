import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Registration.module.css';
import MobileCalendarSrc from '../../assets/Mobile_calendar.png';
import DesktopCalendarSrc from '../../assets/Desktop_calendar.png';

function Registration(): JSX.Element {
  return (
    <section className={styles.wrapper} id="#registration">
      <h2>Geschäftspartner</h2>
      <div className={styles.container}>
        <div className={styles.publicity}>
          <h3>Sie sind Handwerker?</h3>
          <h3>Gehen Sie Online</h3>
          <p>Wir helfen Ihnen Ihr Geschäft und Kundenstamm weiter auszubauen</p>
        </div>
        <img
          className={styles.MobileView}
          src={MobileCalendarSrc}
          alt="mobile calendar"
        />
        <img
          className={styles.DesktopView}
          src={DesktopCalendarSrc}
          alt="Desktop calendar"
        />
        <Link to={'/registration'} className={styles.application}>
          Partner werden
        </Link>
        <Link to="/loginpartner" className={styles.login}>
          Login
        </Link>
      </div>
    </section>
  );
}
export default Registration;
