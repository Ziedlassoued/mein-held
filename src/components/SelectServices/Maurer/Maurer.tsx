import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Maurer.module.css';
import MaurerSrc from '../../../assets/servicesIcon/maurer.png';

function Maurer(): JSX.Element {
  return (
    <div className={styles.category}>
      <div className={styles.boxContainer}>
        <div className={styles.box}>
          <h3>Maurer</h3>
          <img src={MaurerSrc} alt="Maurer" />
          <Link to={'/MaurerList'} className={styles.btn}>
            suchen
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Maurer;
