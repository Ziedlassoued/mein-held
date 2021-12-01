import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Klempner.module.css';

function Klempner(): JSX.Element {
  return (
    <div className={styles.items}>
      <img src="src/assets/servicesIcon/Klempner.png" alt="Klempner" />
      <Link to={'/KlempnerList'}>Klempner</Link>
    </div>
  );
}

export default Klempner;
