import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Footer from '../../../components/Footer/Footer';
import NavBar from '../../../components/NavBar/NavBar';
import { FormInputProps } from '../../../components/SignUp/SignUpForm/SignUpForm';

import styles from './ElektrikerList.module.css';

function ElektrikerList(): JSX.Element {
  const [users, setUsers] = useState<FormInputProps[]>([]);

  useEffect(() => {
    axios
      .get('/api/users/')
      .then((response) => {
        console.log(response);
        setUsers(response.data);
      })
      .catch(() => {
        console.error();
      });
  }, []);

  return (
    <div className={styles.main}>
      <NavBar />
      <div className={styles.container}>
        {users?.length === 0 && (
          <span>keine Diensleister im Moment vorhanden</span>
        )}
        <div>
          <ul>
            {users.map((user) => (
              <div key={user.email}>
                <div className={styles.row}>
                  <h2>{user.companyName} </h2>
                  <p>{user.city}</p>
                </div>
              </div>
            ))}
          </ul>
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default ElektrikerList;
