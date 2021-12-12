import React from 'react';
import styles from './Second.module.css';
import FacebookSrc from '../../../assets/secondMedia/facebook.png';
import InstagramSrc from '../../../assets/socialMedia/instagram.png';
import YoutubeSrc from '../../../assets/socialMedia/youtube.png';
import PinterestSrc from '../../../assets/socialMedia/pinterst.png';
import TwitterSrc from '../../../assets/socialMedia/twitter.png';
import EmailSrc from '../../../assets/socialMedia/email.png';

function Second(): JSX.Element {
  return (
    <div className={styles.content}>
      <div className={styles.img}>
        <div className={styles.socialIcon}>
          <img src={FacebookSrc} alt="facebook" />
          <img src={InstagramSrc} alt="instagram" />
          <img src={YoutubeSrc} alt="youtube" />
          <img src={PinterestSrc} alt="pinterest" />
          <img src={TwitterSrc} alt="twitter" />
        </div>
        <img className={styles.email} src={EmailSrc} alt="" />
      </div>
    </div>
  );
}

export default Second;
