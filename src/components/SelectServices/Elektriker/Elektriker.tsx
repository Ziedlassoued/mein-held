import React from 'react';
import styles from './Elektriker.module.css';
import { Link } from 'react-router-dom';
import ElektrikerSrc from '../../../assets/servicesIcon/Elektriker.png';

function Elektriker(): JSX.Element {
  return (
    <div className={styles.items}>
      <img src={ElektrikerSrc} alt="elektriker" />
      <Link to={'/ElektrikerList'}>elektriker</Link>
    </div>
  );
}

export default Elektriker;
