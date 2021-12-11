import React, { useEffect, useState } from 'react';
import Footer from '../../../components/Footer/Footer';
import NavBar from '../../../components/NavBar/NavBar';
import styles from './BodenlegerList.module.css';

function BodenlegerList(): JSX.Element {
  const [message, setMessage] = useState('');
  useEffect(() => {
    fetch('/api/users')
      .then((response) => response.json())
      .then((result) => setMessage(result.message));
  }, []);
  return (
    <div className={styles.container}>
      <NavBar />
      {message}
      <Footer />
    </div>
  );
}
export default BodenlegerList;
