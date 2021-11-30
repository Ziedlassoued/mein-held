import React from 'react';
import styles from './Klempner.module.css';

function Klempner(): JSX.Element {
  return (
    <div className={styles.items}>
      <img src="src/assets/servicesIcon/Klempner.png" alt="Klempner" />
      <a href="#">Klempner</a>
    </div>
  );
}

export default Klempner;
