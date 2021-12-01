import React from 'react';
import styles from './Elektriker.module.css';
import { Link } from 'react-router-dom';

function Elektriker(): JSX.Element {
  return (
    <div className={styles.items}>
      <img src="src/assets/servicesIcon/elektriker.png" alt="elektriker" />
      <Link to={'/ElektrikerList'}>elektriker</Link>
    </div>
  );
}

export default Elektriker;
