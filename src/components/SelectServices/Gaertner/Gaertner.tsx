import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Gaertner.module.css';

function Gaertner(): JSX.Element {
  return (
    <div className={styles.items}>
      <img src="src/assets/servicesIcon/Gaertner.png" alt="Gaertner" />
      <Link to={'/GaertnerList'}>Gärtner</Link>
    </div>
  );
}

export default Gaertner;
