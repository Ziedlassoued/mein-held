import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Gaertner.module.css';
import GaertnerSrc from '../../../assets/servicesIcon/Gaertner.png';

function Gaertner(): JSX.Element {
  return (
    <div className={styles.items}>
      <img src={GaertnerSrc} alt="Gaertner" />
      <Link to={'/GaertnerList'}>Gärtner</Link>
    </div>
  );
}

export default Gaertner;
