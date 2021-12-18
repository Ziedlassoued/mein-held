import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import { FormInputProps } from '../../components/SignUp/SignUpForm/SignUpForm';
import styles from './PartnerLandingPage.module.css';
import Slider from '../../components/Slider/Slider';
import { SliderData } from '../../components/Slider/SliderData';
import RatingSecond from '../../components/Rating/Rating';
import Evaluation from '../../components/Evalution/Evalutation';

function PartnerLandingPage(): JSX.Element {
  const [users, setUsers] = useState<FormInputProps[]>([]);

  useEffect(() => {
    axios
      .get('/api/users')
      .then((response) => {
        console.log(response);
        setUsers(response.data);
      })
      .catch(() => {
        console.error();
      });
  }, []);
  return (
    <div>
      <div className={styles.main}>
        <NavBar />
        <div className={styles.container}>
          {users?.length === 0 && (
            <span>keine Diensleister im Moment vorhanden</span>
          )}
          <div className={styles.teamrow}>
            {users.map((user) => (
              <div key={user.email}>
                {user.category === 'Maler' && (
                  <div className={styles.teammember}>
                    <h2>{user.companyName}</h2>
                    <p>
                      <Evaluation />
                    </p>
                    <div className={styles.slider}>
                      <Slider slides={SliderData} />
                    </div>
                    <div className={styles.info}>
                      <div>
                        {user.street} <span>{user.houseNumber}</span>{' '}
                      </div>
                      <div>
                        {user.zip}
                        <span> {user.city}</span>
                      </div>
                      <div>{user.phonNumber}</div>
                      <div>{user.email}</div>
                      <div className={styles.contactMap}>
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2490.426747309047!2d7.471252016017439!3d51.37683442806167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b93c8de5f7490b%3A0xfbe167e8443ee396!2sBoeler%20Str.%2C%20Hagen!5e0!3m2!1sde!2sde!4v1639839115134!5m2!1sde!2sde"
                          width="330"
                          height="300"
                          loading="lazy"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.contactForm}>
          <h3>hinterlasse doch eine Bewertung</h3>
          <div className={styles.rating}>
            <RatingSecond />
          </div>
          <form>
            <div className={styles.formBox}>
              <div className={styles.row100}>
                <div className={styles.inputBox}>
                  <span>Nachricht</span>
                  <textarea
                    placeholder="Nachricht hier schreiben"
                    name="text"
                  ></textarea>
                </div>
              </div>
              <div className={styles.row100}>
                <div className={styles.inputBox}>
                  <input type="submit" value="Senden" />
                </div>
              </div>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default PartnerLandingPage;
