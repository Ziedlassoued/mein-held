import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Maurer.module.css';
import MaurerSrc from '../../../assets/servicesIcon/maurer.png';

function Maurer(): JSX.Element {
  return (
    <div className={styles.items}>
      <img src={MaurerSrc} alt="Maurer" />
      <Link to={'/MaurerList'}>Maurer</Link>
    </div>
  );
}

export default Maurer;
