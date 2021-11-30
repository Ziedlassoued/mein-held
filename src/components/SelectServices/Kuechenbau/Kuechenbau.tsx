import React from 'react';
import styles from './Kuechenbau.module.css';

function Kuechenbau(): JSX.Element {
  return (
    <div className={styles.items}>
      <img src="src/assets/servicesIcon/Kuechenbau.png" alt="Kuechenbau" />
      <a href="#">Kuechenbau</a>
    </div>
  );
}

export default Kuechenbau;
