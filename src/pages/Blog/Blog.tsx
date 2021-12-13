import React from 'react';
import Footer from '../../components/Footer/Footer';
import styles from './Blog.module.css';
import NavBarBlog from '../../components/NavBar/NavBarBlog/NavBarBlog';
import BlogBackgroundSrc from '../../assets/blog_background.jpeg';

function Blog(): JSX.Element {
  return (
    <div className={styles.main}>
      <NavBarBlog />
      <h1>Die neuesten Trends im DIY</h1>
      <div className={styles.blog}>
        <div className={styles.container}>
          <div className={styles.blogPost}>
            <div className={styles.blogContent}>
              <img src={BlogBackgroundSrc} alt="" />
              <div className={styles.blogTitle}>
                <h3>Die neuesten Smarthome Trends</h3>
                <button className={styles.btnBlog}>mehr lesen</button>
                <span>2 minuten</span>
              </div>
            </div>
            <div className={styles.blogContent}>
              <img src={BlogBackgroundSrc} alt="" />
              <div className={styles.blogTitle}>
                <h3>Die neuesten Smarthome Trends</h3>
                <button className={styles.btnBlog}>mehr lesen</button>
                <span>2 minuten</span>
              </div>
            </div>
            <div className={styles.blogContent}>
              <img src={BlogBackgroundSrc} alt="" />
              <div className={styles.blogTitle}>
                <h3>Die neuesten Smarthome Trends</h3>
                <button className={styles.btnBlog}>mehr lesen</button>
                <span>2 minuten</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Blog;
