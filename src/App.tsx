// import { useEffect, useState } from 'react';
import React from 'react';
import LandingPage from './pages/LandingPage/LandingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ElektrikerList from './pages/Services/ElektrikerList/ElektrikerList';
import BodenlegerList from './pages/Services/BodenlegerList/BodenlegerList';
import SignUpForm from './components/SignUp/SignUpForm/SignUpForm';
import SchreinerList from './pages/Services/SchreinerList/SchreinerList';
import DachdeckerList from './pages/Services/DachdeckerList/DachdeckerList';
import Smarthome from './components/SelectServices/Smarthome/Smarthome';
import MalerList from './pages/Services/MalerList/MalerList';
import KlempnerList from './pages/Services/KlempnerList/KlempnerList';
import Kuechenbau from './components/SelectServices/Kuechenbau/Kuechenbau';
import Sanitaer from './components/SelectServices/Sanitaer/Sanitaer';
import GaertnerList from './pages/Services/GaertnerList/GaertnerList';
import FliesenlegerList from './pages/Services/FliesenlegerList/FliesenlegerList';
import MaurerList from './pages/Services/MaurerList/MaurerList';
import LoginPartner from './pages/Login/LoginPartner';

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
        <Route path="/SchreinerList" element={<SchreinerList />}></Route>
        <Route path="/DachdeckerList" element={<DachdeckerList />}></Route>
        <Route path="/Smarthome" element={<Smarthome />}></Route>
        <Route path="/MalerList" element={<MalerList />}></Route>
        <Route path="/KlempnerList" element={<KlempnerList />}></Route>
        <Route path="/Kuechenbau" element={<Kuechenbau />}></Route>
        <Route path="/Sanitaer" element={<Sanitaer />}></Route>
        <Route path="/GaertnerList" element={<GaertnerList />}></Route>
        <Route path="/FliesenlegerList" element={<FliesenlegerList />}></Route>
        <Route path="/MaurerList" element={<MaurerList />}></Route>
        <Route path="/Bodenlegerlist" element={<BodenlegerList />}></Route>
        <Route path="/registration" element={<SignUpForm />}></Route>
        <Route path="/geschaeftspartner" element={<SignUpForm />}></Route>
        <Route path="/loginpartner" element={<LoginPartner />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
