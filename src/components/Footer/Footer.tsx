import React from 'react';
import styles from './Footer.module.css';

function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col}>
            <h4>Kundenservice</h4>
            <ul className={styles.list}>
              <li>
                <a href="#">Wir helfen dir weiter</a>
                <a href="#">0800 - 12 34 56</a>
                <a href="#">Mo - Sa 08:00 - 20:00 Uhr</a>
                <a href="#">meinheld@meinheld.de</a>
              </li>
            </ul>
          </div>
          <div className={styles.col}>
            <h4>Entdecke</h4>
            <ul className={styles.list}>
              <li>
                <a href="#">Guide</a>
                <a href="#">Unser Blog</a>
                <a href="#">FAQ</a>
                <a href="#">Handwerker empfehlen</a>
              </li>
            </ul>
          </div>
          <div className={styles.col}>
            <h4>Geschäftspartner</h4>
            <ul className={styles.list}>
              <li>
                <a href="#">Partner werden</a>
                <a href="#">Partner Help Center</a>
              </li>
            </ul>
          </div>
          <div className={styles.col}>
            <h4>follow us</h4>
            <div className={styles.socialMedia}>
              <i className="fab fa-facebook"></i>
              <i className="fab fa-youtube-square"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-pinterest-square"></i>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
