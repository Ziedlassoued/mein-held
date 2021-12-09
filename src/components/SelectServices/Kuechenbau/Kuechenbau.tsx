import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Kuechenbau.module.css';
import KuechnebauSrc from '../../../assets/servicesIcon/Kuechenbau.png';

function Kuechenbau(): JSX.Element {
  return (
    <div className={styles.items}>
      <img src={KuechnebauSrc} alt="Kuechenbau" />
      <Link to={'/KuechenbauList'}>Küchenbau</Link>
    </div>
  );
}

export default Kuechenbau;
