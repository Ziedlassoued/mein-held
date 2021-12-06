import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

function NavBar(): JSX.Element {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className={styles.navBar}>
      <img
        className={styles.imageLogo}
        src="src/assets/constructionman.png"
        alt="logo"
      />
      <h1 className={styles.logo}>Mein Held</h1>
      <ul
        className={isMobile ? styles.listMobile : styles.list}
        onClick={() => setIsMobile(false)}
      >
        <Link className={styles.items} to="/">
          <li>Home</li>
        </Link>
        <a href="#services" className={styles.items}>
          <li>Services</li>
        </a>
        <Link className={styles.items} to="/blog">
          <li>Blog</li>
        </Link>
        <Link className={styles.items} to="/geschaeftspartner">
          <li>Geschäftspartner</li>
        </Link>
        <Link className={styles.items} to="/contact-us">
          <li>Contact us</li>
        </Link>
      </ul>
      <button className={styles.btn} onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? (
          <img
            className={styles.iconClose}
            src="src/assets/close.png"
            alt="close"
          />
        ) : (
          <img
            className={styles.iconMobile}
            src="src/assets/burgermenu.png"
            alt="menu"
          />
        )}
      </button>
    </nav>
  );
}
export default NavBar;
