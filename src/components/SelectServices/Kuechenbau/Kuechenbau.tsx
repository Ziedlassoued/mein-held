import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Kuechenbau.module.css';
import KuechnebauSrc from '../../../assets/servicesIcon/kuechenbau.png';

function Kuechenbau(): JSX.Element {
  return (
    <div className={styles.category}>
      <div className={styles.boxContainer}>
        <div className={styles.box}>
          <h3>Küchenbau</h3>
          <img src={KuechnebauSrc} alt="Kuechenbau" />
          <Link to={'/KuechenbauList'} className={styles.btn}>
            suchen
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Kuechenbau;
