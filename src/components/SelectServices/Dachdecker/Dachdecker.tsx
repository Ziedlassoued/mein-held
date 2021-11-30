import React from 'react';
import styles from './Dachdecker.module.css';

function Dachdecker(): JSX.Element {
  return (
    <div className={styles.items}>
      <img src="src/assets/servicesIcon/Dachdecker.png" alt="Dachdecker" />
      <a href="#">Dachdecker</a>
    </div>
  );
}

export default Dachdecker;
