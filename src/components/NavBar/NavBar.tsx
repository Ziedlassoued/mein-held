import React, { useState } from 'react';
import styles from './NavBar.module.css';

function NavBar(): JSX.Element {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className={styles.navBar}>
      <h1 className={styles.logo}>Mein Held</h1>
      <ul
        className={isMobile ? styles.listMobile : styles.list}
        onClick={() => setIsMobile(false)}
      >
        <li className={styles.items}>Home</li>
        <li className={styles.items}>Services</li>
        <li className={styles.items}>Blog</li>
        <li className={styles.items}>Geschäftspartner</li>
        <li className={styles.items}>Contact us</li>
      </ul>
      <button className={styles.btn} onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </button>
    </nav>
  );
}
export default NavBar;
