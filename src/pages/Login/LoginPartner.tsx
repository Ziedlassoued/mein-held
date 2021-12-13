import React, { FormEvent, useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import styles from './LoginPartner.module.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router';

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

  const [companyName, setCompanyName] = useState(
    localStorage.getItem('current user') || ''
  );

  useEffect(() => {
    localStorage.removeItem('current user');
  }, [setCompanyName]);

  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const response = await fetch(`/api/users/${companyName}`);
    if (!response.ok) {
      await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ companyName }),
      });
    }
    localStorage.setItem('Current User', companyName);
    navigate('/me');
  };
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
                <input
                  placeholder="Firmen Name"
                  {...register('companyName')}
                  onChange={(event) => setCompanyName(event.target.value)}
                />
                <p>{errors.companyName?.message}</p>
              </div>
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
