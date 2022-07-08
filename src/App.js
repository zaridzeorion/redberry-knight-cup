
import React from 'react'

import MainPage from './components/MainPage';
import PersonalInformation from './components/PersonalInformation';
import Experience from './components/Experience';
import Completed from './components/Completed';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/personal-information" element={<PersonalInformation />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/completed" element={<Completed />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
