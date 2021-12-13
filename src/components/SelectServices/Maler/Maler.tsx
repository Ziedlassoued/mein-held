import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Maler.module.css';
import MalerSrc from '../../../assets/servicesIcon/maler.png';

function Maler(): JSX.Element {
  return (
    <div className={styles.category}>
      <div className={styles.boxContainer}>
        <div className={styles.box}>
          <h3>Maler</h3>
          <img src={MalerSrc} alt="Maler" />
          <Link to={'/MalerList'} className={styles.btn}>
            suchen
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Maler;
