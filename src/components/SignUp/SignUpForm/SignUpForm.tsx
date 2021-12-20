import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import NavBar from '../../NavBar/NavBar';
import styles from './SignUpForm.module.css';
import Modal from '../../Modal/Modal';

export interface FormInputProps {
  companyName: string;
  owner: string;
  email: string;
  street: string;
  houseNumber: number;
  zip: number;
  city: string;
  phonNumber: number;
  category: string;
  password: string;
  confirmPassword: string;
}

const schema = yup.object().shape({
  companyName: yup.string().required('bitte Firmen Name eingeben'),
  category: yup.string().required(),
  owner: yup
    .string()
    .required('bitte Vor- und Nachname der Firmen Inhaber eingeben'),
  street: yup.string().required('bitte Straße eingeben'),
  city: yup.string().required('bitte Stadt eingeben'),
  zip: yup.number().positive().integer().min(5).required('bitte plz eingeben'),
  email: yup.string().email().required('bitte Email eingeben'),
  houseNumber: yup
    .number()
    .positive()
    .integer()
    .required('bitte Haus nr. eingeben'),
  phonNumber: yup
    .number()
    .positive()
    .integer()
    .required('bitte Tel. Nr. eingeben'),
  password: yup.string().min(4).max(15).required(),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null]),
  // image: yup
  //   .mixed()
  //   .required()
  //   .test('fileSize', 'Die Datei ist zu groß', (value) => {
  //     return value && value[0].size < 2000000;
  //   }),
});

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputProps>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormInputProps> = (data) => {
    console.log(data);
    fetch('/api/users/', {
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
                <label className={styles.details}>Firmen Name</label>
                <input placeholder="Firmen Name" {...register('companyName')} />
                <p>{errors.companyName?.message}</p>
              </div>
              <div className={styles.inputBox}>
                <label className={styles.details}>Kategorie auswählen</label>
                <select className={styles.selectBox} {...register('category')}>
                  <option value="Kategorie">Kategorie</option>
                  <option value="Küchenbau">Kategorie</option>
                  <option value="Elektriker">Elektriker</option>
                  <option value="Schreiner">Schreiner</option>
                  <option value="Dachdecker">Dachdecker</option>
                  <option value="Smarthome">Smarthome</option>
                  <option value="Maler">Maler</option>
                  <option value="Klempner">Klempner</option>
                  <option value="Sanitär">Sanitär</option>
                  <option value="Gärtner">Gärtner</option>
                  <option value="Fliesenleger">Fliesenleger</option>
                  <option value="Maurer">Maurer</option>
                  <option value="Bodenleger">Bodenleger</option>
                </select>
                <p> {errors.category?.message} </p>
              </div>

              <div className={styles.inputBox}>
                <label className={styles.details}>Inhaber</label>
                <input
                  placeholder="Vor- und Nachname vom Inhaber"
                  {...register('owner')}
                />
                <p>{errors.owner?.message}</p>
              </div>
              <div className={styles.inputBox}>
                <label className={styles.details}>Email</label>
                <input placeholder="Email" {...register('email')} />
                <p> {errors.email?.message} </p>
              </div>

              <div className={styles.inputBox}>
                <span className={styles.details}>Telefon Nr.</span>
                <input placeholder="Telefon Nr." {...register('phonNumber')} />
              </div>
              <div className={styles.inputBox}>
                <span className={styles.details}>Straße</span>
                <input placeholder="Straße" {...register('street')} />
                <p> {errors.street?.message} </p>
              </div>
              <div className={styles.inputBox}>
                <span className={styles.details}>Haus Nr.</span>
                <input placeholder="Haus Nr." {...register('houseNumber')} />
                <p> {errors.houseNumber?.message}</p>
              </div>
              <div className={styles.inputBox}>
                <span className={styles.details}>Postleitzahl</span>
                <input placeholder="Postleitzahl" {...register('zip')} />
                <p> {errors.zip?.message} </p>
              </div>
              <div className={styles.inputBox}>
                <span className={styles.details}>Sadt</span>
                <input placeholder="Stadt" {...register('city')} />
                <p> {errors.city?.message} </p>
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
              <div className={styles.inputBox}>
                <span className={styles.details}>Passwort bestätigen</span>
                <input
                  type="password"
                  placeholder="Passwort bestätigen"
                  {...register('confirmPassword')}
                />
                <p>
                  {errors.confirmPassword && 'Passwort muss übereinstimmen!'}
                </p>
              </div>
              <div className={styles.btn}>
                <input type="submit" value="Anmelden" />
              </div>
            </div>
            <span className={styles.member}>
              Haben Sie bereits ein Konto? <br />
              Login
              <Link to="/loginpartner" className={styles.link}>
                {''} hier
              </Link>
            </span>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
