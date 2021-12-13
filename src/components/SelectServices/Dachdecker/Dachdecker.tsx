import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Dachdecker.module.css';
import DachdeckerSrc from '../../../assets/servicesIcon/dachdecker.png';

function Dachdecker(): JSX.Element {
  return (
    <div className={styles.category}>
      <div className={styles.boxContainer}>
        <div className={styles.box}>
          <h3>Dachdecker</h3>
          <img src={DachdeckerSrc} alt="Dachdecker" />
          <Link to={'/DachdeckerList'} className={styles.btn}>
            suchen
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dachdecker;
