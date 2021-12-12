import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import styles from './Contact.module.css';

function Contact() {
  return (
    <div>
      <NavBar />
      <div className={styles.main}>
        <div className={styles.contactUs}>
          <div className={styles.title}>
            <h2>Kontaktiere uns</h2>
          </div>
          <div className={styles.box}>
            <div className={styles.contactForm}>
              <h3>Schreib uns eine Nachricht</h3>
              <form>
                <div className={styles.formBox}>
                  <div className={styles.row50}>
                    <div className={styles.inputBox}>
                      <span>Vorname</span>
                      <input type="text" placeholder="Vorname" />
                    </div>
                    <div className={styles.inputBox}>
                      <span>Nachname</span>
                      <input type="text" placeholder="Nachname" />
                    </div>
                  </div>
                  <div className={styles.row50}>
                    <div className={styles.inputBox}>
                      <span>Email</span>
                      <input type="text" placeholder="beispiel@email.de" />
                    </div>
                    <div className={styles.inputBox}>
                      <span>Mobile</span>
                      <input type="text" placeholder="+49 123 123" />
                    </div>
                  </div>
                  <div className={styles.row100}>
                    <div className={styles.inputBox}>
                      <span>Message</span>
                      <textarea placeholder="Nachricht hier schreiben"></textarea>
                    </div>
                  </div>
                  <div className={styles.row100}>
                    <div className={styles.inputBox}>
                      <input type="submit" value="Senden" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className={styles.contactInfo}>
              <h3>kontakt Info</h3>
              <div className={styles.infoBox}>
                <div>
                  <span>
                    <i className="fas fa-map-marker-alt"></i>{' '}
                  </span>
                  <p>
                    Muster straße, Hagen <br />
                    Deutschland
                  </p>
                </div>
                <div>
                  <span>
                    <i className="far fa-envelope"></i>{' '}
                  </span>
                  <a href="mailto:meinheld@meinheld.de">meinheld@meinheld.de</a>
                </div>
                <div>
                  <span>
                    <i className="fas fa-phone"></i>{' '}
                  </span>
                  <a href="tel:+492331123456">+49 2331 12 34 56</a>
                </div>
                <ul className={styles.social}>
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-youtube-square"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-pinterest-square"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.contactMap}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2491.3425441889317!2d7.470682415672032!3d51.35999917961118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b93b7de1da9657%3A0xfcd3af1af4b58e04!2sSparkassen-Karree%2C%2058095%20Hagen!5e0!3m2!1sde!2sde!4v1639256381208!5m2!1sde!2sde"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
