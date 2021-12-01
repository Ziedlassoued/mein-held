import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Schreiner.module.css';

function Schreiner(): JSX.Element {
  return (
    <div className={styles.items}>
      <img src="src/assets/servicesIcon/Schreiner.png" alt="Schreiner" />
      <Link to={'/SchreinerList'}>Schreiner</Link>
    </div>
  );
}

export default Schreiner;
