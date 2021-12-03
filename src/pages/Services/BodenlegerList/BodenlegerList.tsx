import React from 'react';
import Footer from '../../../components/Footer/Footer';
import NavBar from '../../../components/NavBar/NavBar';
import styles from './BodenlegerList.module.css';

function BodenlegerList(): JSX.Element {
  return (
    <div className={styles.container}>
      <NavBar />
      <Footer />
    </div>
  );
}
export default BodenlegerList;
