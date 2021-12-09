import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Klempner.module.css';
import KlempnerSrc from '../../../assets/servicesIcon/Klempner.png';

function Klempner(): JSX.Element {
  return (
    <div className={styles.items}>
      <img src={KlempnerSrc} alt="Klempner" />
      <Link to={'/KlempnerList'}>Klempner</Link>
    </div>
  );
}

export default Klempner;
