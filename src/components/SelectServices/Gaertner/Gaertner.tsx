import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Gaertner.module.css';
import GaertnerSrc from '../../../assets/servicesIcon/gaertner.png';

function Gaertner(): JSX.Element {
  return (
    <div className={styles.category}>
      <div className={styles.boxContainer}>
        <div className={styles.box}>
          <h3>Gärtner</h3>
          <img src={GaertnerSrc} alt="Gaertner" />
          <Link to={'/GaertnerList'} className={styles.btn}>
            suchen
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Gaertner;
