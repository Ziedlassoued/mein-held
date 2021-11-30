import React from 'react';
import styles from './Bodenleger.module.css';

function Bodenleger(): JSX.Element {
  return (
    <div className={styles.items}>
      <img src="src/assets/servicesIcon/Bodenleger.png" alt="Bodenleger" />
      <a href="#">Bodenleger</a>
    </div>
  );
}

export default Bodenleger;
