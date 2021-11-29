import React from 'react';
import styles from './SelectServices.module.css';

function SelectServices() {
  return (
    <section className={styles.container}>
      <h2>Services</h2>
      <div className={styles.services}>
        <a href="#">
          elektriker
          <img src="scr/assets/servicesIcon/elektriker.png" alt="elektriker" />
        </a>
        <a href="#">schreiner</a>
        <a href="#">dachdecker</a>
        <a href="#">smarthome</a>
        <a href="#">maler</a>
        <a href="#">klempner</a>
        <a href="#">küchenbau</a>
        <a href="#">sanitär</a>
        <a href="#">gärtner</a>
        <a href="#">fliesenleger</a>
        <a href="#">maurer</a>
        <a href="#">bodenleger</a>
      </div>
    </section>
  );
}
export default SelectServices;
