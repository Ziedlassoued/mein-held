import React from 'react';
import styles from './Smarthome.module.css';

function Smarthome(): JSX.Element {
  return (
    <div className={styles.items}>
      <img src="src/assets/servicesIcon/Smarthome.png" alt="Smarthome" />
      <a href="src/pages/Smarthome">Smarthome</a>
    </div>
  );
}

export default Smarthome;
