import { useEffect, useState } from 'react';
import styles from './App.module.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/hello')
      .then((response) => response.json())
      .then((result) => setMessage(result.message));
  }, []);
  return (
    <div className={styles.app}>
      <p>Mein Held</p>
      <p>{message}</p>
    </div>
  );
}

export default App;
