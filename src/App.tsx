// import { useEffect, useState } from 'react';
import React from 'react';
import LandingPage from './pages/LandingPage/LandingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ElektrikerList from './pages/ElektrikerList/ElektrikerList';
import BodenlegerList from './pages/BodenlegerList/BodenlegerList';

function App() {
  // const [message, setMessage] = useState('');

  // useEffect(() => {
  //   fetch('/api/hello')
  //     .then((response) => response.json())
  //     .then((result) => setMessage(result.message));
  // }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/ElektrikerList" element={<ElektrikerList />}></Route>
        <Route path="/Bodenlegerlist" element={<BodenlegerList />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
