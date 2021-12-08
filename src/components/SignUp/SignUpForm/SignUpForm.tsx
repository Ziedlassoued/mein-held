import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import NavBar from '../../NavBar/NavBar';
import styles from './SignUpForm.module.css';

interface FormInputProps {
  companyName: string;
  owner: string;
  email: string;
  street: string;
  houseNr: number;
  zip: number;
  city: string;
  phonNumber: number;
  category: string;
}

export default function SignUpForm() {
  const { register, handleSubmit } = useForm<FormInputProps>();
  const onSubmit: SubmitHandler<FormInputProps> = (data) => {
    console.log(data);
    fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((response) => console.log(response.json()));
  };

  return (
    <div>
      <NavBar />
      <div className={styles.main}>
        <div className={styles.container}>
          <div>
            <h3 className={styles.title}>Anmeldung</h3>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.companyDetails}>
              <div className={styles.inputBox}>
                <label>Firmen Name</label>
                <input {...register('companyName')} />
              </div>
              <div className={styles.inputBox}>
                <label>Kategorie auswählen</label>
                <select {...register('category')}>
                  <option value="Kategorie">Kategorie</option>
                  <option value="Elektriker">Elektriker</option>
                  <option value="Schreiner">Schreiner</option>
                  <option value="Dachdecker">Dachdecker</option>
                  <option value="Smarthome">Smarthome</option>
                  <option value="Maler">Maler</option>
                  <option value="Klempner">Klempner</option>
                  <option value="Küchenbau">Kategorie</option>
                  <option value="Sanitär">Sanitär</option>
                  <option value="Gärtner">Gärtner</option>
                  <option value="Fliesenleger">Fliesenleger</option>
                  <option value="Maurer">Maurer</option>
                  <option value="Bodenleger">Bodenleger</option>
                </select>
              </div>
              <div className={styles.inputBox}>
                <label>Inhaber</label>
                <input {...register('owner')} />
              </div>
              <div className={styles.inputBox}>
                <label>Email</label>
                <input {...register('email')} />
              </div>
              <div className={styles.inputBox}>
                <label>Telefon Nr.</label>
                <input {...register('phonNumber')} />
              </div>
              <div className={styles.inputBox}>
                <label>Straße</label>
                <input {...register('street')} />
              </div>
              <div className={styles.inputBox}>
                <label>Haus Nr.</label>
                <input {...register('houseNr')} />
              </div>
              <div className={styles.inputBox}>
                <label>Postleitzahl</label>
                <input {...register('zip')} />
              </div>
              <div className={styles.inputBox}>
                <label>Stadt</label>
                <input {...register('city')} />
              </div>
              <div className={styles.btn}>
                <input type="submit" value="Anmelden" />
              </div>
            </div>
            <span className={styles.member}>
              Haben Sie bereits ein Konto? <br />
              Login {''}
              <Link to="/loginpartner" className={styles.link}>
                hier
              </Link>
            </span>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
