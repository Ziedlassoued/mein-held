import React from 'react';
import styles from './SignUpSuccess.module.css';
import SuccessImageSrc from '../../../assets/signupsuccess.jpeg';

function SignUpSuccess(): JSX.Element {
  return (
    <div className={styles.container}>
      <h1 className={styles.message}>Wir haben Ihre Anmeldung erhalten!</h1>
      <img
        className={styles.successpicture}
        src={SuccessImageSrc}
        alt="erfolgreich angemeldet"
      />
    </div>
  );
}

export default SignUpSuccess;
