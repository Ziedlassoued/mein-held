import React from 'react';
import styles from './SelectServices.module.css';
import Elektriker from './Elektriker/Elektriker';
import { Link } from 'react-router-dom';
import Schreiner from './Schreiner/Schreiner';
import Dachdecker from './Dachdecker/Dachdecker';
import Smarthome from './Smarthome/Smarthome';
import Maler from './Maler/Maler';
import Klempner from './Klempner/Klempner';
import Kuechenbau from './Kuechenbau/Kuechenbau';
import Sanitaer from './Sanitaer/Sanitaer';
import Gaertner from './Gaertner/Gaertner';
import Fliesenleger from './Fliesenleger/Fliesenleger';
import Maurer from './Maurer/Maurer';
import Bodenleger from './Bodenleger/Bodenleger';

function SelectServices() {
  return (
    <section className={styles.container}>
      <h2>Services</h2>
      <div className={styles.services}>
        <div>
          <Link to="/Elektriker">
            <Elektriker />
          </Link>
        </div>
        <div>
          <Link to="/Schreiner">
            <Schreiner />
          </Link>
        </div>
        <div>
          <Link to="/Dachdecker">
            <Dachdecker />
          </Link>
        </div>
        <div>
          <Link to="/Smarthome">
            <Smarthome />
          </Link>
        </div>
        <div>
          <Link to="/Maler">
            <Maler />
          </Link>
        </div>
        <div>
          <Link to="/Klempner">
            <Klempner />
          </Link>
        </div>
        <div>
          <Link to="/Kuechenbau">
            <Kuechenbau />
          </Link>
        </div>
        <div>
          <Link to="/Sanitaer">
            <Sanitaer />
          </Link>
        </div>
        <div>
          <Link to="/Gaertner">
            <Gaertner />
          </Link>
        </div>
        <div>
          <Link to="/Fliesenleger">
            <Fliesenleger />
          </Link>
        </div>
        <div>
          <Link to="/Maurer">
            <Maurer />
          </Link>
        </div>
        <div>
          <Link to="/Bodenleger">
            <Bodenleger />
          </Link>
        </div>
      </div>
    </section>
  );
}
export default SelectServices;
