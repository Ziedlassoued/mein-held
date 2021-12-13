import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Klempner.module.css';
import KlempnerSrc from '../../../assets/servicesIcon/klempner.png';

function Klempner(): JSX.Element {
  return (
    <div className={styles.category}>
      <div className={styles.boxContainer}>
        <div className={styles.box}>
          <h3>Klempner</h3>
          <img src={KlempnerSrc} alt="Klempner" />
          <Link to={'/KlempnerList'} className={styles.btn}>
            suchen
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Klempner;
