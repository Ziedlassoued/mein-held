import React from 'react';
import styles from './Elektriker.module.css';
import { Link } from 'react-router-dom';
import ElektrikerSrc from '../../../assets/servicesIcon/elektriker.png';

function Elektriker(): JSX.Element {
  return (
    <div className={styles.category}>
      <div className={styles.boxContainer}>
        <div className={styles.box}>
          <h3>Elektriker</h3>
          <img src={ElektrikerSrc} alt="elektriker" />
          <Link to={'/ElektrikerList'} className={styles.btn}>
            suchen
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Elektriker;
