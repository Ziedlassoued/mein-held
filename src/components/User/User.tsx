import React from 'react';
import styles from './User.module.css';

export type UserProps = {
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
function User({
  companyName,
  owner,
  email,
  street,
  houseNr,
  zip,
  city,
  phonNumber,
  category,
}: UserProps) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h5>{companyName}</h5>
        <h5>{owner}</h5>
        <h5>{email}</h5>
        <h5>{street}</h5>
        <h5>{houseNr}</h5>
        <h5>{zip}</h5>
        <h5>{city}</h5>
        <h5>{phonNumber}</h5>
        <h5>{category}</h5>
      </div>
      <a>More</a>
    </div>
  );
}

export default User;
