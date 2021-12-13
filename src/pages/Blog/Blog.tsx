import React from 'react';
import Footer from '../../components/Footer/Footer';
import styles from './Blog.module.css';
import NavBarBlog from '../../components/NavBar/NavBarBlog/NavBarBlog';

import PlayBoySrc from '../../assets/playboy.jpeg';
import BlogPictureSrc from '../../assets/blogpicture.jpeg';
import MeisterSchreinerSrc from '../../assets/meisterschreiner.jpg';
import MeisterSrc from '../../assets/meister.jpeg';

function Blog(): JSX.Element {
  return (
    <div>
      <NavBarBlog />
      <section>
        <div className={styles.main}>
          <h1>
            Die neuesten Trends im <span>DIY</span>
          </h1>
          <div className={styles.blog}>
            <div className={styles.container}>
              <div className={styles.blogPost}>
                <div className={styles.blogContent}>
                  <img src={MeisterSrc} alt="" />
                  <div className={styles.blogTitle}>
                    <h3>Die neuesten Smarthome Trends</h3>
                    <button className={styles.btnBlog}>mehr lesen</button>
                  </div>
                </div>
                <div className={styles.blogContent}>
                  <img src={MeisterSchreinerSrc} alt="" />
                  <div className={styles.blogTitle}>
                    <h3>Die neuesten Smarthome Trends</h3>
                    <button className={styles.btnBlog}>mehr lesen</button>
                  </div>
                </div>
                <div className={styles.blogContent}>
                  <img src={BlogPictureSrc} alt="" />
                  <div className={styles.blogTitle}>
                    <h3>Die neuesten Smarthome Trends</h3>
                    <button className={styles.btnBlog}>mehr lesen</button>
                  </div>
                </div>
                <div className={styles.blogContent}>
                  <img src={PlayBoySrc} alt="" />
                  <div className={styles.blogTitle}>
                    <h3>Die neuesten Smarthome Trends</h3>
                    <button className={styles.btnBlog}>mehr lesen</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Blog;
