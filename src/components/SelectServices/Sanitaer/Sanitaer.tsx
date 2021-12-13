import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Sanitaer.module.css';
import SanitaerSrc from '../../../assets/servicesIcon/sanitaer.png';

function Sanitaer(): JSX.Element {
  return (
    <div className={styles.category}>
      <div className={styles.boxContainer}>
        <div className={styles.box}>
          <h3>Sanitär</h3>
          <img src={SanitaerSrc} alt="Sanitaer" />
          <Link to={'/SanitaerList'} className={styles.btn}>
            suchen
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sanitaer;
