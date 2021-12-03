import React, { useState } from 'react';
import styles from './SignUp.module.css';
import SignUpForm from './SignUpForm/SignUpForm';
import SignUpSuccess from './SignUpSucces/SignUpSuccess';

function SignUp(): JSX.Element {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className={styles.container}>
      {!isSubmitted ? <SignUpForm /> : <SignUpSuccess />}
      {setIsSubmitted(true)}
    </div>
  );
}

export default SignUp;
