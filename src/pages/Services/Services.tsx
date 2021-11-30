import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './Services.module.css';
import SelectServices from '../../components/SelectServices/SelectServices';
import Elektriker from '../../components/SelectServices/Elektriker/Elektriker';
import Schreiner from '../../components/SelectServices/Schreiner/Schreiner';
import Dachdecker from '../../components/SelectServices/Dachdecker/Dachdecker';
import Smarthome from '../../components/SelectServices/Smarthome/Smarthome';
import Maler from '../../components/SelectServices/Maler/Maler';
import Klempner from '../../components/SelectServices/Klempner/Klempner';
import Kuechenbau from '../../components/SelectServices/Kuechenbau/Kuechenbau';
import Sanitaer from '../../components/SelectServices/Sanitaer/Sanitaer';
import Gaertner from '../../components/SelectServices/Gaertner/Gaertner';
import Fliesenleger from '../../components/SelectServices/Fliesenleger/Fliesenleger';
import Maurer from '../../components/SelectServices/Maurer/Maurer';
import Bodenleger from '../../components/SelectServices/Bodenleger/Bodenleger';

function Services() {
  return (
    <div className={styles.container}>
      <Router>
        <Routes>
          <Route path="/" element={<SelectServices />} />
          <Route path="Elektriker" element={<Elektriker />} />
          <Route path="Schreiner" element={<Schreiner />} />
          <Route path="Dachdecker" element={<Dachdecker />} />
          <Route path="Smarthome" element={<Smarthome />} />
          <Route path="Maler" element={<Maler />} />
          <Route path="Klempner" element={<Klempner />} />
          <Route path="Kuechenbau" element={<Kuechenbau />} />
          <Route path="Sanitaer" element={<Sanitaer />} />
          <Route path="Gaertner" element={<Gaertner />} />
          <Route path="Fliesenleger" element={<Fliesenleger />} />
          <Route path="Maurer" element={<Maurer />} />
          <Route path="Bodenleger" element={<Bodenleger />} />
        </Routes>
      </Router>
    </div>
  );
}
export default Services;
