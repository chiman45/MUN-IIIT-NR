import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Components/Pages/Home Page/HomePage.jsx';
import PastEventPage from './Components/Pages/Past Events/PastEvents.jsx';
import ScrollToTop from './Utilities/ScrollToTop.jsx';
import TeamPage from './Components/Pages/Team/TeamPage.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/past-events" element={<PastEventPage />} />
      <Route path="/team" element={<TeamPage/>}/>
    </Routes>
  );
}

export default App;
