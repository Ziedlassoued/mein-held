import React, { FormEvent, useState } from 'react';
import styles from './SignUpForm.module.css';

function SignUpForm(): JSX.Element {
  const [values, setValues] = useState({
    fullname: '',
    email: '',
    password: '',
  });

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
  };
  return (
    <div className={styles.container}>
      <div className={styles.appWrapper}>
        <div>
          <h2 className={styles.title}>Create Account</h2>
        </div>
        <form className={styles.formWrapper}>
          <div className={styles.name}>
            <label className={styles.label}>Full Name</label>
            <input
              className={styles.input}
              type="text"
              name="fullname"
              value={values.fullname}
            />
          </div>
          <div className={styles.email}>
            <label className={styles.label}>Email</label>
            <input
              className={styles.input}
              type="email"
              name="email"
              value={values.email}
            />
          </div>
          <div className={styles.password}>
            <label className={styles.label}>Password</label>
            <input
              className={styles.input}
              type="password"
              name="password"
              value={values.password}
            />
          </div>
          <div>
            <button className={styles.submit} onClick={handleFormSubmit}>
              {setValues} Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;
