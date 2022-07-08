
import React from 'react'

import MainPage from './components/MainPage';
import PersonalInformation from './components/PersonalInformation';
import Experience from './components/Experience';
import Completed from './components/Completed';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useSelector } from "react-redux";

function App() {
  let isRouteOpen = useSelector(state => state.routesOpenClose)

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MainPage />} />

        <Route path="/personal-information" element={<PersonalInformation />} />

        {isRouteOpen.experience && <Route path="/experience" element={<Experience />} />}
        {isRouteOpen.onboardingCompleted && <Route path="/onboardingCompleted" element={<Completed />} />}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
