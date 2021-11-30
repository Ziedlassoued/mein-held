import React from 'react';
import styles from './Maurer.module.css';

function Maurer(): JSX.Element {
  return (
    <div className={styles.items}>
      <img src="src/assets/servicesIcon/Maurer.png" alt="Maurer" />
      <a href="#src/pages/MaurerList">Maurer</a>
    </div>
  );
}

export default Maurer;
