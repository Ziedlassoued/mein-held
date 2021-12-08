import React, { useEffect, useState } from 'react';
import Footer from '../../../components/Footer/Footer';
import NavBar from '../../../components/NavBar/NavBar';
import styles from './ElektrikerList.module.css';
type UserProps = {
  companyName: string;
  owner: string;
  email: string;
  street: string;
  houseNr: number;
  zip: number;
  city: string;
  phonNumber: number;
  category: string;
};

function ElektrikerList(): JSX.Element {
  const [users, setUsers] = useState<UserProps[] | null>(null);
  function useGetUsers(): UserProps[] | null {
    const category = 'Smarthome';
    useEffect(() => {
      fetch('/api/users/' + category)
        .then((response) => response.json())
        .then(setUsers);
    }, []);

    return users;
  }
  useGetUsers;
  return (
    <>
      <div className={styles.container}>
        <NavBar />
        {users
          ? users.map((anObjectMapped) => {
              return (
                <p key={`${anObjectMapped.email}`}>
                  {anObjectMapped.companyName} - {anObjectMapped.email}
                </p>
              );
            })
          : []}
        <Footer />
      </div>
    </>
  );
}
export default ElektrikerList;
