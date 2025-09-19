import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Kk from './pages/Kk';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kk" element={<Kk />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
