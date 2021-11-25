import React, { useEffect, useState } from 'react';
import styles from './NavBar.module.css';

function NavBar(): JSX.Element {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidht, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidht = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', changeWidht);

    return () => {
      window.addEventListener('resize', changeWidht);
    };
  }, []);

  return (
    <nav>
      {(toggleMenu || screenWidht > 500) && (
        <ul className={styles.list}>
          <li className={styles.items}>Home</li>
          <li className={styles.items}>Services</li>
          <li className={styles.items}>Blog</li>
          <li className={styles.items}>Geschäftspartner</li>
          <li className={styles.items}>Contact us</li>
        </ul>
      )}

      <button onClick={toggleNav} className={styles.btn}>
        NavBar
      </button>
    </nav>
  );
}
export default NavBar;
