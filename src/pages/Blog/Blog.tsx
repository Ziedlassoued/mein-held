import React from 'react';
import Footer from '../../components/Footer/Footer';
import styles from './Blog.module.css';
import NavBarBlog from '../../components/NavBar/NavBarBlog/NavBarBlog';

function Blog(): JSX.Element {
  return (
    <div className={styles.container}>
      <NavBarBlog />
      <section id="diy"></section>
      <section id="styling"></section>
      <Footer />
    </div>
  );
}

export default Blog;
