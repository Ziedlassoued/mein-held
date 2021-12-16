import React from 'react';
import styles from './Card.module.css';
import DachdeckerSrc from '../../assets/serviceImages/Dachdecker.jpeg';
import FliesenlegerSrc from '../../assets/serviceImages/fliesenleger.jpeg';
import ElektrikerSrc from '../../assets/serviceImages/elektriker.jpeg';
import KlempnerSrc from '../../assets/serviceImages/klempner.jpeg';

function Card(): JSX.Element {
  return (
    <section>
      <h1 className={styles.title}>Services</h1>
      <div className={styles.teamrow}>
        <div className={styles.flex}>
          <div className={styles.teammember}>
            <img src={ElektrikerSrc} alt="" />
            <h2>Elektriker</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
              mollitia beatae quaerat autem adipisci nesciunt deleniti!
            </p>
          </div>
          <div className={styles.teammember}>
            <img src={DachdeckerSrc} alt="" />
            <h2>Dachdecker</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
              mollitia beatae quaerat autem adipisci nesciunt deleniti!
            </p>
          </div>
          <div className={styles.teammember}>
            <img src={FliesenlegerSrc} alt="" />
            <h2>Fliesenleger</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
              mollitia beatae quaerat autem adipisci nesciunt deleniti!
            </p>
          </div>
          <div className={styles.teammember}>
            <img src={KlempnerSrc} alt="" />
            <h2>Klempner</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
              mollitia beatae quaerat autem adipisci nesciunt deleniti!
            </p>
          </div>
        </div>
        <div className={styles.flex}>
          <div className={styles.teammember}>
            <img src={ElektrikerSrc} alt="" />
            <h2>Dachdecker</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
              mollitia beatae quaerat autem adipisci nesciunt deleniti!
            </p>
          </div>
          <div className={styles.teammember}>
            <img src={ElektrikerSrc} alt="" />
            <h2>Dachdecker</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
              mollitia beatae quaerat autem adipisci nesciunt deleniti!
            </p>
          </div>
          <div className={styles.teammember}>
            <img src={ElektrikerSrc} alt="" />
            <h2>Dachdecker</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
              mollitia beatae quaerat autem adipisci nesciunt deleniti!
            </p>
          </div>
          <div className={styles.teammember}>
            <img src={ElektrikerSrc} alt="" />
            <h2>Dachdecker</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
              mollitia beatae quaerat autem adipisci nesciunt deleniti!
            </p>
          </div>
        </div>
        <div className={styles.flex}>
          <div className={styles.teammember}>
            <img src={ElektrikerSrc} alt="" />
            <h2>Dachdecker</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
              mollitia beatae quaerat autem adipisci nesciunt deleniti!
            </p>
          </div>
          <div className={styles.teammember}>
            <img src={ElektrikerSrc} alt="" />
            <h2>Dachdecker</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
              mollitia beatae quaerat autem adipisci nesciunt deleniti!
            </p>
          </div>
          <div className={styles.teammember}>
            <img src={ElektrikerSrc} alt="" />
            <h2>Dachdecker</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
              mollitia beatae quaerat autem adipisci nesciunt deleniti!
            </p>
          </div>
          <div className={styles.teammember}>
            <img src={ElektrikerSrc} alt="" />
            <h2>Dachdecker</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
              mollitia beatae quaerat autem adipisci nesciunt deleniti!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Card;
