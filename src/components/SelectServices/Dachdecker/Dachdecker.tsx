import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Dachdecker.module.css';
import DachdeckerSrc from '../../../assets/servicesIcon/dachdecker.png';

function Dachdecker(): JSX.Element {
  return (
    <div className={styles.items}>
      <img src={DachdeckerSrc} alt="Dachdecker" />
      <Link to={'/DachdeckerList'}>Dachdecker</Link>
    </div>
  );
}

export default Dachdecker;
