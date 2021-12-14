import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
      <div className={styles.category}>
        <h1 className={styles.heading}>
          Services der Kategorie <span>Elektriker</span>
        </h1>
        <div className={styles.boxContainer}>
          <div className={styles.box}>
            {users?.length === 0 && (
              <span>keine Diensleister im Moment vorhanden</span>
            )}
            {users.map((user) => (
              <div key={user.email}>
                {user.category === 'Elektriker' && (
                  <div className={styles.row}>
                    <h3>{user.companyName} </h3>
                    <p>{user.city}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <Link to={'/SmarthomeList'} className={styles.btn}>
            suchen
          </Link>
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default ElektrikerList;
