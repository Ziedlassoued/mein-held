import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Evaluation from '../../../components/Evalution/Evalutation';
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
        <h1 className={styles.heading}>Elektriker</h1>

        {users?.length === 0 && (
          <span>keine Diensleister im Moment vorhanden</span>
        )}
        <div className={styles.boxContainer}>
          {users.map((user) => (
            <div key={user.email}>
              {user.category === 'Elektriker' && (
                <div className={styles.box}>
                  <h3>{user.companyName}</h3>
                  <div className={styles.rating}>
                    <Evaluation />
                  </div>
                  <div>
                    {user.street} <span>{user.houseNumber}</span>{' '}
                  </div>
                  <div>
                    {user.zip}
                    <span> {user.city}</span>
                  </div>
                  <div>{user.phonNumber}</div>
                  <div>{user.email}</div>
                  <Link to={'/elektrikermeister}'} className={styles.btn}>
                    Seite
                  </Link>
                  <details>
                    <p className={styles.text}>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Incidunt error fugiat debitis, quaerat ipsa maxime nulla
                      eveniet odio tempora minima sequi beatae harum corrupti
                      recusandae magni veniam ducimus libero magnam!
                    </p>
                  </details>
                </div>
              )}
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default ElektrikerList;
