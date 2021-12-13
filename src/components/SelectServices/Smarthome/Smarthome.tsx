import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Smarthome.module.css';
import SmarthomeSrc from '../../../assets/servicesIcon/smarthome.png';

function Smarthome(): JSX.Element {
  return (
    <div className={styles.category}>
      <div className={styles.boxContainer}>
        <div className={styles.box}>
          <h3>Smarthome</h3>
          <img src={SmarthomeSrc} alt="Smarthome" />
          <Link to={'/SmarthomeList'} className={styles.btn}>
            suchen
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Smarthome;
