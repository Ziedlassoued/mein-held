import { useEffect, useState } from 'react';
import styles from './App.module.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Registration from './components/Registration/Registration';
import SelectServices from './components/SelectServices/SelectServices';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/hello')
      .then((response) => response.json())
      .then((result) => setMessage(result.message));
  }, []);
  return (
    <div className={styles.app}>
      <NavBar />
      <p>{message}</p>
      <SelectServices />
      <Registration />
      <Footer />
    </div>
  );
}

export default App;
