import React from 'react';
import styles from './SignUpForm.module.css';

function SignUpForm(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>konto erstellen</h2>
      </div>
      <div className={styles.inputs}>
        <form className={styles.formWrapper}>
          <div className={styles.name}>
            <label className={styles.label}>First Name</label>
            <input
              className={styles.input}
              type="text"
              name="firstname"
              placeholder="First Name"
            />
          </div>
          <div className={styles.lastname}>
            <label className={styles.label}>Last Name</label>
            <input
              className={styles.input}
              type="text"
              name="lastname"
              placeholder="Last Name"
            />
          </div>
          <div className={styles.email}>
            <label className={styles.label}>Email</label>
            <input
              className={styles.input}
              type="text"
              name="email"
              placeholder="Email"
            />
          </div>
          <div className={styles.age}>
            <label className={styles.label}>Age</label>
            <input
              className={styles.input}
              type="text"
              name="age"
              placeholder="Age"
            />
          </div>
          <div className={styles.password}>
            <label className={styles.label}>Password</label>
            <input
              className={styles.input}
              type="text"
              name="password"
              placeholder="password"
            />
          </div>
          <div className={styles.confirmPassword}>
            <label className={styles.label}>Confirm Password</label>
            <input
              className={styles.input}
              type="text"
              name="confirmPassword"
              placeholder="Confirm Password"
            />
          </div>
          <input type="submit" id="submit" />
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;
