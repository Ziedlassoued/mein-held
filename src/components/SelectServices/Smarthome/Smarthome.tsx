import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Smarthome.module.css';
import SmarthomeSrc from '../../../assets/servicesIcon/Smarthome.png';

function Smarthome(): JSX.Element {
  return (
    <div className={styles.items}>
      <img src={SmarthomeSrc} alt="Smarthome" />
      <Link to={'/SmarthomeList'}>Smarthome</Link>
    </div>
  );
}

export default Smarthome;
