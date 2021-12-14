import React from 'react';
import styles from './SelectServices.module.css';
import Elektriker from './Elektriker/Elektriker';
import Schreiner from './Schreiner/Schreiner';
import Dachdecker from './Dachdecker/Dachdecker';
import Maler from './Maler/Maler';
import Klempner from './Klempner/Klempner';
import Kuechenbau from './Kuechenbau/Kuechenbau';
import Sanitaer from './Sanitaer/Sanitaer';
import Gaertner from './Gaertner/Gaertner';
import Fliesenleger from './Fliesenleger/Fliesenleger';
import Maurer from './Maurer/Maurer';
import Bodenleger from './Bodenleger/Bodenleger';
import Smarthome from './Smarthome/Smarthome';

function SelectServices() {
  return (
    <div className={styles.category}>
      <h1 className={styles.heading}>
        Services nach <span>kategorien</span>
      </h1>
      <div className={styles.boxContainer}>
        <div>
          <Elektriker />
        </div>
        <div>
          <Schreiner />
        </div>
        <div>
          <Dachdecker />
        </div>
        <div>
          <Smarthome />
        </div>
        <div>
          <Maler />
        </div>
        <div>
          <Klempner />
        </div>
        <div>
          <Kuechenbau />
        </div>
        <div>
          <Sanitaer />
        </div>
        <div>
          <Gaertner />
        </div>
        <div>
          <Fliesenleger />
        </div>
        <div>
          <Maurer />
        </div>
        <div>
          <Bodenleger />
        </div>
      </div>
    </div>
  );
}
export default SelectServices;
