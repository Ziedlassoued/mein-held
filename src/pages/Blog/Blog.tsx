import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import styles from './Blog.module.css';
import { FormInputProps } from '../../components/SignUp/SignUpForm/SignUpForm';

function Blog(): JSX.Element {
  const [users, setUsers] = useState<FormInputProps[]>([]);

  useEffect(() => {
    fetch('/api/users')
      .then((response) => response.json())
      .then(setUsers);
  }, []);

  return (
    <div className={styles.container}>
      <NavBar />
      <div>
        <h1>Blog</h1>

        <ul>
          {!users && <span>Loading...</span>}
          {users?.length === 0 && <span>no blog found </span>}
          {users?.map((user) => (
            <li key={user.companyName}>
              {user.companyName}
              {user.city} <p>{user.zip}</p>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default Blog;
