import React from 'react';
import styles from './Maler.module.css';

function Maler(): JSX.Element {
  return (
    <div className={styles.items}>
      <img src="src/assets/servicesIcon/Maler.png" alt="Maler" />
      <a href="src/pages/MalerList">Maler</a>
    </div>
  );
}

export default Maler;
