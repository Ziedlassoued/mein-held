import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Kuechenbau.module.css';

function Kuechenbau(): JSX.Element {
  return (
    <div className={styles.items}>
      <img src="src/assets/servicesIcon/Kuechenbau.png" alt="Kuechenbau" />
      <Link to={'/KuechenbauList'}>Küchenbau</Link>
    </div>
  );
}

export default Kuechenbau;
