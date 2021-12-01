import { useEffect, useState } from 'react';
import styles from './App.module.css';
import LandingPage from './pages/LandingPage/LandingPage';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/hello')
      .then((response) => response.json())
      .then((result) => setMessage(result.message));
  }, []);
  return (
    <div className={styles.app}>
      <LandingPage />
      <p>{message}</p>
    </div>
  );
}

export default App;
