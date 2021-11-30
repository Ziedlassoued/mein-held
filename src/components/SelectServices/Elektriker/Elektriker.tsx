import React from 'react';
import styles from './Elektriker.module.css';

function Elektriker(): JSX.Element {
  return (
    <div className={styles.items}>
      <img src="src/assets/servicesIcon/elektriker.png" alt="elektriker" />
      <a href="src/pages/ElektrikerList">elektriker</a>
    </div>
  );
}

export default Elektriker;
