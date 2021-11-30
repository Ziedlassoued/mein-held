import React from 'react';
import styles from './Fliesenleger.module.css';

function Fliesenleger(): JSX.Element {
  return (
    <div className={styles.items}>
      <img src="src/assets/servicesIcon/Fliesenleger.png" alt="Fliesenleger" />
      <a href="#">Fliesenleger</a>
    </div>
  );
}

export default Fliesenleger;
