import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Smarthome.module.css';

function Smarthome(): JSX.Element {
  return (
    <div className={styles.items}>
      <img src="src/assets/servicesIcon/Smarthome.png" alt="Smarthome" />
      <Link to={'/SmarthomeList'}>Smarthome</Link>
    </div>
  );
}

export default Smarthome;
