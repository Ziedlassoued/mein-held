import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Schreiner.module.css';
import SchreinerSrc from '../../../assets/servicesIcon/schreiner.png';

function Schreiner(): JSX.Element {
  return (
    <div className={styles.items}>
      <img src={SchreinerSrc} alt="Schreiner" />
      <Link to={'/SchreinerList'}>Schreiner</Link>
    </div>
  );
}

export default Schreiner;
