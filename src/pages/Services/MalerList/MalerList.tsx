import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../../components/Footer/Footer';
import NavBar from '../../../components/NavBar/NavBar';
import { FormInputProps } from '../../../components/SignUp/SignUpForm/SignUpForm';
import styles from './MalerList.module.css';
import MalerSrc from '../../../assets/serviceImages/Maler.jpeg';
import Evaluation from '../../../components/Evalution/Evalutation';

function MalerList(): JSX.Element {
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
        <h2 className={styles.title}>Maler</h2>
        {users?.length === 0 && (
          <span>keine Diensleister im Moment vorhanden</span>
        )}
        <Link to={'/MalerList/partnerlandingpage}}'} className={styles.btn}>
          <div className={styles.teamrow}>
            {users.map((user) => (
              <div key={user.email}>
                {user.category === 'Maler' && (
                  <div className={styles.teammember}>
                    <h2>{user.companyName}</h2>
                    <div className={styles.img}>
                      <img src={MalerSrc} alt="" />
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
                    <div className={styles.evaluation}>
                      <Evaluation />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Link>
        <Footer />
      </div>
    </div>
  );
}
export default MalerList;
