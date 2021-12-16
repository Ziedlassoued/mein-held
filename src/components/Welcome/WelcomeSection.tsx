import React from 'react';
import styles from './WelcomeSection.module.css';
import CarpenterSrc from '../../assets/handwerkerweiss.jpeg';

function WelcomeSection(): JSX.Element {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1>jetzt die besten Handwerker finden</h1>
        <h3>freu dich drauf</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
          soluta iste aliquam quo eos maxime similique dolorum consequatur cum
          illum enim. Quam alias, voluptate ea dolorem omnis inventore nisi
          vitae.
        </p>
        <a href="#services">
          <button>suchen</button>
        </a>
        <a href="#registration">
          <button>Partner werden</button>
        </a>
        <div className={styles.icon}>
          <a href="#" className="fab fa-facebook"></a>
          <a href="#" className="fab fa-twitter"></a>
          <a href="#" className="fab fa-instagram"></a>
          <a href="#" className="fab fa-pinterest"></a>
        </div>
      </div>
      <div className={styles.image}>
        <img src={CarpenterSrc} alt="" />
      </div>
    </section>
  );
}

export default WelcomeSection;
