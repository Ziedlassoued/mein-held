import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Sanitaer.module.css';
import SanitaerSrc from '../../../assets/servicesIcon/Sanitaer.png';

function Sanitaer(): JSX.Element {
  return (
    <div className={styles.items}>
      <img src={SanitaerSrc} alt="Sanitaer" />
      <Link to={'/SanitaerList'}>Sanitär</Link>
    </div>
  );
}

export default Sanitaer;
