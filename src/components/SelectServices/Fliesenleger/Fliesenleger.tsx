import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Fliesenleger.module.css';
import FliesenlegerSrc from '../../../assets/servicesIcon/fliesenleger.png';

function Fliesenleger(): JSX.Element {
  return (
    <div className={styles.category}>
      <div className={styles.boxContainer}>
        <div className={styles.box}>
          <h3>Fliesenleger</h3>
          <img src={FliesenlegerSrc} alt="Fliesenleger" />
          <Link to={'/FliesenlegerList'} className={styles.btn}>
            suchen
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Fliesenleger;
