import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Maurer.module.css';

function Maurer(): JSX.Element {
  return (
    <div className={styles.items}>
      <img src="src/assets/servicesIcon/Maurer.png" alt="Maurer" />
      <Link to={'/MaurerList'}>Maurer</Link>
    </div>
  );
}

export default Maurer;
