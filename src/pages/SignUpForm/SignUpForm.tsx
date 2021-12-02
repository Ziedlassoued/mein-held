import React from 'react';
import styles from './SignUpForm.module.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

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
  password: yup.string().min(4).max(15).required(),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null]),
});

function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = handleSubmit((data) => console.log(data));

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div>
          <h3 className={styles.title}>Formular</h3>
        </div>
        <form onSubmit={submitForm}>
          <div className={styles.companyDetails}>
            <div className={styles.inputBox}>
              <span className={styles.details}>Firmen Name</span>
              <input placeholder="Firmen Name" {...register('companyName')} />
              <p> {errors.companyName?.message} </p>
            </div>
            <div className={styles.inputBox}>
              <span className={styles.details}>
                Bitte eine Kategorie auswählen
              </span>
              <select className={styles.inputBox} {...register('category')}>
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
              <p> {errors.category?.message} </p>
            </div>
            <div className={styles.inputBox}>
              <span>Inhaber</span>
              <input placeholder="Inhaber" {...register('owner')} />
              <p> {errors.owner?.message} </p>
            </div>
            <div className={styles.inputBox}>
              <span className={styles.details}>Email</span>
              <input placeholder="Email" {...register('email')} />
              <p> {errors.email?.message} </p>
            </div>
            <div className={styles.inputBox}>
              <span className={styles.details}>Straße</span>
              <input placeholder="Straße" {...register('street')} />
              <p> {errors.street?.message} </p>
            </div>
            <div className={styles.inputBox}>
              <span className={styles.details}>Haus Nr.</span>
              <input placeholder="Haus Nr." {...register('hausNr')} />
              <p> {errors.houseNumber?.message} </p>
            </div>
            <div className={styles.inputBox}>
              <span className={styles.details}>Stadt</span>
              <input placeholder="Stadt" {...register('city')} />
              <p> {errors.city?.message} </p>
            </div>
            <div className={styles.inputBox}>
              <span className={styles.details}>Postleitzahl</span>
              <input placeholder="Postleitzahl" {...register('zip')} />
              <p> {errors.zip?.message} </p>
            </div>
            <div className={styles.inputBox}>
              <span className={styles.details}>Passwort</span>
              <input placeholder="Passwort" {...register('password')} />
              <p> {errors.password?.message} </p>
            </div>
            <div className={styles.inputBox}>
              <span className={styles.details}>Passwort bestätigen</span>
              <input
                placeholder="Passwort bestätigen"
                {...register('confirmPassword')}
              />
              <p>
                {errors.confirmPassword && 'Passwort muss übereinstimmen!'}{' '}
              </p>
            </div>
            <div className={styles.btn}>
              <input type="submit" id="submit" value="Anmelden" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;
