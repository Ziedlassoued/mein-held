import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Fliesenleger.module.css';

function Fliesenleger(): JSX.Element {
  return (
    <div className={styles.items}>
      <img src="src/assets/servicesIcon/Fliesenleger.png" alt="Fliesenleger" />
      <Link to={'/FliesenlegerList'}>Fliesenleger</Link>
    </div>
  );
}

export default Fliesenleger;
