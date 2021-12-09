import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Fliesenleger.module.css';
import FliesenlegerSrc from '../../../assets/servicesIcon/Fliesenleger.png';

function Fliesenleger(): JSX.Element {
  return (
    <div className={styles.items}>
      <img src={FliesenlegerSrc} alt="Fliesenleger" />
      <Link to={'/FliesenlegerList'}>Fliesenleger</Link>
    </div>
  );
}

export default Fliesenleger;
