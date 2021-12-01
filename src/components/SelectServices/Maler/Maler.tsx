import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Maler.module.css';

function Maler(): JSX.Element {
  return (
    <div className={styles.items}>
      <img src="src/assets/servicesIcon/Maler.png" alt="Maler" />
      <Link to={'/MalerList'}>Maler</Link>
    </div>
  );
}

export default Maler;
