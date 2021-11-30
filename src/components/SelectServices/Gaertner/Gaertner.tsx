import React from 'react';
import styles from './Gaertner.module.css';

function Gaertner(): JSX.Element {
  return (
    <div className={styles.items}>
      <img src="src/assets/servicesIcon/Gaertner.png" alt="Gaertner" />
      <a href="src/pages/GaertnerList">Gärtner</a>
    </div>
  );
}

export default Gaertner;
