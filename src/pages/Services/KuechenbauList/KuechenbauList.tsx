import React from 'react';
import Footer from '../../../components/Footer/Footer';
import NavBar from '../../../components/NavBar/NavBar';
import styles from './KuechenbauList.module.css';

function KuechenbauList(): JSX.Element {
  return (
    <div className={styles.container}>
      <NavBar />
      <Footer />
    </div>
  );
}
export default KuechenbauList;
