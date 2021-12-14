import React, { useState } from 'react';
import styles from './SignUp.module.css';
import SignUpForm from './SignUpForm/SignUpForm';
import SignUpSuccess from './SignUpSucces/SignUpSuccess';

function SignUp(): JSX.Element {
  const [isSubmited, setIsSubmited] = useState(false);
  {
    setIsSubmited(true);
  }
  return (
    <div className={styles.container}>
      {!isSubmited ? <SignUpForm /> : <SignUpSuccess />}
    </div>
  );
}

export default SignUp;
