import React from 'react';
import styles from './Schreiner.module.css';

function Schreiner(): JSX.Element {
  return (
    <div className={styles.items}>
      <img src="src/assets/servicesIcon/Schreiner.png" alt="Schreiner" />
      <a href="#">Schreiner</a>
    </div>
  );
}

export default Schreiner;
