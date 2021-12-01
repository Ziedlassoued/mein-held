import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Dachdecker.module.css';

function Dachdecker(): JSX.Element {
  return (
    <div className={styles.items}>
      <img src="src/assets/servicesIcon/Dachdecker.png" alt="Dachdecker" />
      <Link to={'/DachdeckerList'}>Dachdecker</Link>
    </div>
  );
}

export default Dachdecker;
