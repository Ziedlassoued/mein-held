import React from 'react';
import Footer from '../../../components/Footer/Footer';
import NavBar from '../../../components/NavBar/NavBar';
import styles from './KlempnerList.module.css';

function KlempnerList(): JSX.Element {
  return (
    <div className={styles.container}>
      <NavBar />
      <Footer />
    </div>
  );
}
export default KlempnerList;
