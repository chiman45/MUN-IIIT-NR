import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Components/Pages/Home Page/HomePage.jsx';
import PastEventPage from './Components/Pages/Past Events/PastEvents.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/past-events" element={<PastEventPage />} />
    </Routes>
  );
}

export default App;
