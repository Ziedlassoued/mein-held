import React from 'react';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import styles from './LoginPartner.module.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().email().required('bitte Email eingeben'),
  password: yup.string().min(4).max(15).required(),
});

function LoginPartner(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = handleSubmit((data) => console.log(data));
  return (
    <div>
      <NavBar />
      <div className={styles.main}>
        <div className={styles.container}>
          <div>
            <h3 className={styles.title}>Login für Geschäftspartner</h3>
          </div>
          <form onSubmit={submitForm}>
            <div className={styles.partnerDetails}>
              <div className={styles.inputBox}>
                <span className={styles.details}>Email</span>
                <input
                  type="email"
                  placeholder="Email"
                  {...register('email')}
                />
                <p> {errors.email?.message} </p>
              </div>
              <div className={styles.inputBox}>
                <span className={styles.details}>Passwort</span>
                <input
                  type="password"
                  placeholder="Passwort"
                  {...register('password')}
                />
                <p> {errors.password?.message} </p>
              </div>
              <div className={styles.btn}>
                <input type="submit" id="submit" value="Anmelden" />
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LoginPartner;
