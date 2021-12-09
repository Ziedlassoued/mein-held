import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Maler.module.css';
import MalerSrc from '../../../assets/servicesIcon/Maler.png';

function Maler(): JSX.Element {
  return (
    <div className={styles.items}>
      <img src={MalerSrc} alt="Maler" />
      <Link to={'/MalerList'}>Maler</Link>
    </div>
  );
}

export default Maler;
