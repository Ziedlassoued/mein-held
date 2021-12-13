import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Schreiner.module.css';
import SchreinerSrc from '../../../assets/servicesIcon/schreiner.png';

function Schreiner(): JSX.Element {
  return (
    <div className={styles.category}>
      <div className={styles.boxContainer}>
        <div className={styles.box}>
          <h3>Schreiner</h3>
          <img src={SchreinerSrc} alt="Schreiner" />
          <Link to={'/SchreinerList'} className={styles.btn}>
            suchen
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Schreiner;
