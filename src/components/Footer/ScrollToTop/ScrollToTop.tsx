import React, { useEffect, useState } from 'react';
import styles from './ScrollToTop.module.css';

function Scroll(): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className={styles.container}>
      <button className={styles.button} type="button" onClick={scrollToTop}>
        {isVisible ? (
          ''
        ) : (
          <img
            className={styles.iconScrollUp}
            src="src/assets/ScrollUp.png"
            alt="Scroll to top"
          />
        )}
      </button>
    </div>
  );
}
export default Scroll;
