import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBarBlog.module.css';
import ConstructionManSrc from '../../../assets/constructionman.png';
import CloseSrc from '../../../assets/close.png';
import BurgerMenuSrc from '../../../assets/burgermenu.png';

function NavBarBlog(): JSX.Element {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className={styles.navBar}>
      <img className={styles.imageLogo} src={ConstructionManSrc} alt="logo" />
      <h1 className={styles.logo}>Mein Held</h1>
      <ul
        className={isMobile ? styles.listMobile : styles.list}
        onClick={() => setIsMobile(false)}
      >
        <Link className={styles.items} to="/">
          <li>Home</li>
        </Link>
        <a href="#" className={styles.items}>
          <li>DIY Ideen mit Anleitung</li>
        </a>
        <a href="#" className={styles.items}>
          <li>Stillwelten & Gestaltungstipps</li>
        </a>
      </ul>
      <button className={styles.btn} onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? (
          <img className={styles.iconClose} src={CloseSrc} alt="close" />
        ) : (
          <img className={styles.iconMobile} src={BurgerMenuSrc} alt="menu" />
        )}
      </button>
    </nav>
  );
}
export default NavBarBlog;
