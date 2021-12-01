import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Bodenleger.module.css';

function Bodenleger(): JSX.Element {
  return (
    <div className={styles.items}>
      <img src="src/assets/servicesIcon/Bodenleger.png" alt="Bodenleger" />
      <Link to={'/BodenlegerList'}>Bodenleger</Link>
    </div>
  );
}

export default Bodenleger;
