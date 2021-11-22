import { useEffect, useState } from 'react';
import styles from './App.module.css';
import { Button } from './stories/Button';

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/hello')
      .then((response) => response.json())
      .then((result) => setMessage(result.message));
  }, []);
  return (
    <div className={styles.app}>
      <p>Hello Vite + React!</p>
      <p>
        <Button
          size="large"
          onClick={() => setCount((count) => count + 1)}
          label={`count is: ${count}`}
        />
      </p>
      <p>{message}</p>
    </div>
  );
}

export default App;
