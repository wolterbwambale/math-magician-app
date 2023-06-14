import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CalculatorPage from './components/CalculatorPage';
import Home from './components/Home';
import QuotesPage from './components/QuotesPage';
import Navbar from './components/Navbar';

function App() {
  return (

    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/quote" element={<QuotesPage />} />
      </Routes>
    </>

  );
}

export default App;
