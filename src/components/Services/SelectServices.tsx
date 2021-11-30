import React from 'react';
import styles from './SelectServices.module.css';
import Elektriker from './Elektriker/Elektriker';

function SelectServices() {
  return (
    <section className={styles.container}>
      <h2>Services</h2>
      <div className={styles.services}>
        <div>
          <Elektriker />
        </div>
        <div className={styles.items}>
          <img src="src/assets/servicesIcon/schreiner.png" alt="schreiner" />
          <a href="#">schreiner</a>
        </div>
        <div className={styles.items}>
          <img src="src/assets/servicesIcon/dachdecker.png" alt="elektriker" />
          <a href="#">dachdecker</a>
        </div>
        <div className={styles.items}>
          <img src="src/assets/servicesIcon/smarthome.png" alt="elektriker" />
          <a href="#">smarthome</a>
        </div>
        <div className={styles.items}>
          <img src="src/assets/servicesIcon/maler.png" alt="elektriker" />
          <a href="#">maler</a>
        </div>
        <div className={styles.items}>
          <img src="src/assets/servicesIcon/klempner.png" alt="elektriker" />
          <a href="#">klempner</a>
        </div>
        <div className={styles.items}>
          <img src="src/assets/servicesIcon/kuechenbau.png" alt="kuechenbau" />
          <a href="#">küchenbau</a>
        </div>
        <div className={styles.items}>
          <img src="src/assets/servicesIcon/sanitaer.png" alt="sanitaer" />
          <a href="#">sanitär</a>
        </div>
        <div className={styles.items}>
          <img src="src/assets/servicesIcon/gaertner.png" alt="gaertner" />
          <a href="#">gärtner</a>
        </div>
        <div className={styles.items}>
          <img
            src="src/assets/servicesIcon/fliesenleger.png"
            alt="fliesenleger"
          />
          <a href="#">fliesenleger</a>
        </div>
        <div className={styles.items}>
          <img src="src/assets/servicesIcon/maurer.png" alt="maurer" />
          <a href="#">maurer</a>
        </div>
        <div className={styles.items}>
          <img src="src/assets/servicesIcon/bodenleger.png" alt="bodenleger" />
          <a href="#">bodenleger</a>
        </div>
      </div>
    </section>
  );
}
export default SelectServices;
