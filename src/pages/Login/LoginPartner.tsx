import React, { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import styles from './LoginPartner.module.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router';
import { User, verifyLogin } from './verifyLogin';

export interface LoginPartnerProps {
  companyName: string;
  email: string;
  password: string;
}

const schema = yup.object().shape({
  companyName: yup.string().required('bitte Firmen Name eingeben'),
  email: yup.string().email().required('bitte Email eingeben'),
  password: yup.string().min(4).max(15).required(),
});

function LoginPartner(): JSX.Element {
  const {
    register,
    formState: { errors },
  } = useForm<LoginPartnerProps>({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();
  const [companyName, setCompanyName] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const user: Partial<User> = { companyName, password };
    await verifyLogin(user);
    localStorage.setItem('Current user', companyName);
    navigate('/me');
  }

  return (
    <div>
      <NavBar />
      <div className={styles.main}>
        <div className={styles.container}>
          <div>
            <h3 className={styles.title}>Login für Geschäftspartner</h3>
          </div>
          <form onSubmit={handleSubmit}>
            <div className={styles.partnerDetails}>
              <div className={styles.inputBox}>
                <label className={styles.details}>Firmen Name</label>
                <input placeholder="Firmen Name" {...register('companyName')} />
                <p>{errors.companyName?.message}</p>
              </div>
              <div className={styles.inputBox}>
                <span className={styles.details}>Email</span>
                <input
                  type="email"
                  placeholder="Email"
                  {...register('email')}
                  onChange={(event) => setCompanyName(event.target.value)}
                />
                <p> {errors.email?.message} </p>
              </div>
              <div className={styles.inputBox}>
                <span className={styles.details}>Passwort</span>
                <input
                  type="password"
                  placeholder="Passwort"
                  {...register('password')}
                  onChange={(event) => setPassword(event.target.value)}
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
