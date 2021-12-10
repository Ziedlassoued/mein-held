import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Footer from '../../../components/Footer/Footer';
import NavBar from '../../../components/NavBar/NavBar';

import styles from './ElektrikerList.module.css';
interface PostProps {
  id: number;
  title: string;
  body: string;
}

function ElektrikerList(): JSX.Element {
  const [posts, setPosts] = useState<PostProps[]>([]);
  useEffect(() => {
    axios
      .get('http://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        console.log(response);
        setPosts(response.data);
      })
      .catch(() => {
        console.error();
      });
  }, []);

  return (
    <div className={styles.main}>
      <NavBar />
      <div className={styles.container}>
        {posts?.length === 0 && (
          <span>keine Diensleister im Moment vorhanden</span>
        )}
        <div>
          <ul>
            {posts.map((user) => (
              <li key={user.id}>
                {user.title} <p>{user.body}</p>
              </li>
            ))}
          </ul>
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default ElektrikerList;
