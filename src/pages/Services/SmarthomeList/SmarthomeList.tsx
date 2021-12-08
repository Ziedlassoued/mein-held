import React from 'react';
import Footer from '../../../components/Footer/Footer';
import NavBar from '../../../components/NavBar/NavBar';
import styles from './SmarthomeList.module.css';

function SmarthomeList(): JSX.Element {
  return (
    <div className={styles.container}>
      <NavBar />
      <table></table>
      <Footer />
    </div>
  );
}
export default SmarthomeList;
