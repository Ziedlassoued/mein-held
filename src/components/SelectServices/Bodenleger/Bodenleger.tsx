import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Bodenleger.module.css';
import BodenlegerSrc from '../../../assets/servicesIcon/Bodenleger.png';

function Bodenleger(): JSX.Element {
  return (
    <div className={styles.items}>
      <img src={BodenlegerSrc} alt="Bodenleger" />
      <Link to={'/BodenlegerList'}>Bodenleger</Link>
    </div>
  );
}

export default Bodenleger;
