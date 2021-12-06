import React from 'react';
import Footer from '../../../components/Footer/Footer';
import NavBar from '../../../components/NavBar/NavBar';
import styles from './MalerList.module.css';

function MalerList(): JSX.Element {
  return (
    <div className={styles.container}>
      <NavBar />
      <Footer />
    </div>
  );
}
export default MalerList;
