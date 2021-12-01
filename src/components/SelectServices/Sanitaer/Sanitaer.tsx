import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Sanitaer.module.css';

function Sanitaer(): JSX.Element {
  return (
    <div className={styles.items}>
      <img src="src/assets/servicesIcon/Sanitaer.png" alt="Sanitaer" />
      <Link to={'/SanitaerList'}>Sanitär</Link>
    </div>
  );
}

export default Sanitaer;
