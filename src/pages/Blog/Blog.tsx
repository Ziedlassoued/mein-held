import React from 'react';
import Footer from '../../components/Footer/Footer';
import styles from './Blog.module.css';
import NavBarBlog from '../../components/NavBar/NavBarBlog/NavBarBlog';
import FacebookSrc from '../../assets/facebook.png';
import InstagramSrc from '../../assets/instagram.png';
import YoutubeSrc from '../../assets/youtube.png';
import PinterestSrc from '../../assets/pinterest.png';
import TwitterSrc from '../../assets/twitter.png';
import EmailSrc from '../../assets/email.png';

function Blog(): JSX.Element {
  return (
    <div className={styles.main}>
      <NavBarBlog />
      <section id="#socialMedia"></section>
      <section id="diy"></section>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.img}>
            <div className={styles.socialIcon}>
              <img src={FacebookSrc} alt="facebook" />
              <img src={InstagramSrc} alt="instagram" />
              <img src={YoutubeSrc} alt="youtube" />
              <img src={PinterestSrc} alt="pinterest" />
              <img src={TwitterSrc} alt="twitter" />
            </div>
            <img className={styles.email} src={EmailSrc} alt="email" />
          </div>
        </div>
      </div>
      <section id="styling"></section>
      <Footer />
    </div>
  );
}

export default Blog;
