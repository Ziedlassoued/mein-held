import React from 'react';
import styles from './Sanitaer.module.css';

function Sanitaer(): JSX.Element {
  return (
    <div className={styles.items}>
      <img src="src/assets/servicesIcon/Sanitaer.png" alt="Sanitaer" />
      <a href="src/pages/SanitaerList">Sanitär</a>
    </div>
  );
}

export default Sanitaer;
