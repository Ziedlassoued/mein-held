import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Bodenleger.module.css';
import BodenlegerSrc from '../../../assets/servicesIcon/bodenleger.png';

function Bodenleger(): JSX.Element {
  return (
    <div className={styles.category}>
      <div className={styles.boxContainer}>
        <div className={styles.box}>
          <h3>Bodenleger</h3>
          <img src={BodenlegerSrc} alt="Bodenleger" />
          <Link to={'/BodenlegerList'} className={styles.btn}>
            suchen
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Bodenleger;
