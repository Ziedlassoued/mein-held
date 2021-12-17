import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../../components/Footer/Footer';
import NavBar from '../../../components/NavBar/NavBar';
import { FormInputProps } from '../../../components/SignUp/SignUpForm/SignUpForm';
import styles from './GaertnerList.module.css';

function GaertnerList(): JSX.Element {
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
        <h1 className={styles.heading}>Gärtner</h1>

        {users?.length === 0 && (
          <span>keine Diensleister im Moment vorhanden</span>
        )}
        <div className={styles.boxContainer}>
          {users.map((user) => (
            <div key={user.email}>
              {user.category === 'Gärtner' && (
                <div className={styles.box}>
                  <h3>{user.companyName}</h3>
                  <div>
                    {user.street} <span>{user.houseNumber}</span>{' '}
                  </div>
                  <div>
                    {user.zip}
                    <span> {user.city}</span>
                  </div>
                  <div>{user.phonNumber}</div>
                  <div>{user.email}</div>
                  <Link to={'/me}'} className={styles.btn}>
                    Seite
                  </Link>
                  <details>
                    <p></p>
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
export default GaertnerList;
