import React from 'react';
import styles from './Card.module.css';
import DachdeckerSrc from '../../assets/serviceImages/Dachdecker.jpeg';
import FliesenlegerSrc from '../../assets/serviceImages/fliesenleger.jpeg';
import ElektrikerSrc from '../../assets/serviceImages/elektriker.jpeg';
import KlempnerSrc from '../../assets/serviceImages/klempner.jpeg';
import SchreinerSrc from '../../assets/serviceImages/schreiner.jpeg';
import SmarthomeSrc from '../../assets/serviceImages/smarthome.jpeg';
import MalerSrc from '../../assets/serviceImages/maler.jpeg';
import KuechenbauSrc from '../../assets/serviceImages/küchenbau.jpeg';
import SanitaerSrc from '../../assets/serviceImages/sanitär.jpeg';
import GaertnerSrc from '../../assets/serviceImages/gärtner.jpeg';
import MaurerSrc from '../../assets/serviceImages/maurer.jpeg';
import BodenLegerSrc from '../../assets/serviceImages/bodenleger.jpeg';
import { Link } from 'react-router-dom';

function Card(): JSX.Element {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Services</h2>
      <div className={styles.teamrow}>
        <Link to={'/ElektrikerList'} className={styles.btn}>
          <div className={styles.teammember}>
            <img src={ElektrikerSrc} alt="" />
            <h2>Elektriker</h2>
          </div>
        </Link>
        <Link to={'/SchreinerList'} className={styles.btn}>
          <div className={styles.teammember}>
            <img src={SchreinerSrc} alt="" />
            <h2>Schreiner</h2>
          </div>{' '}
        </Link>
        <Link to={'/DachdeckerList'} className={styles.btn}>
          <div className={styles.teammember}>
            <img src={DachdeckerSrc} alt="" />
            <h2>Dachdecker</h2>
          </div>
        </Link>
        <Link to={'/SmarthomeList'} className={styles.btn}>
          <div className={styles.teammember}>
            <img src={SmarthomeSrc} alt="" />
            <h2>Smarthome</h2>
          </div>
        </Link>
        <Link to={'/MalerList'} className={styles.btn}>
          <div className={styles.teammember}>
            <img src={MalerSrc} alt="" />
            <h2>Maler</h2>
          </div>
        </Link>
        <Link to={'/KlempnerList'} className={styles.btn}>
          <div className={styles.teammember}>
            <img src={KlempnerSrc} alt="" />
            <h2>Klempner</h2>
          </div>
        </Link>
        <Link to={'/KuechenbauList'} className={styles.btn}>
          <div className={styles.teammember}>
            <img src={KuechenbauSrc} alt="" />
            <h2>Küchenbau</h2>
          </div>
        </Link>
        <Link to={'/SanitaerList'} className={styles.btn}>
          <div className={styles.teammember}>
            <img src={SanitaerSrc} alt="" />
            <h2>Sanitär</h2>
          </div>
        </Link>
        <Link to={'/GaertnerList'} className={styles.btn}>
          <div className={styles.teammember}>
            <img src={GaertnerSrc} alt="" />
            <h2>Gärtner</h2>
          </div>
        </Link>
        <Link to={'/FliesenlegerList'} className={styles.btn}>
          <div className={styles.teammember}>
            <img src={FliesenlegerSrc} alt="" />
            <h2>Fliesenleger</h2>
          </div>
        </Link>
        <Link to={'/MaurerList'} className={styles.btn}>
          <div className={styles.teammember}>
            <img src={MaurerSrc} alt="" />
            <h2>Maurer</h2>
          </div>
        </Link>
        <Link to={'/BodenlegerList'} className={styles.btn}>
          <div className={styles.teammember}>
            <img src={BodenLegerSrc} alt="" />
            <h2>Bodenleger</h2>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default Card;
