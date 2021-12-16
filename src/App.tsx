import React from 'react';
import Home from './pages/Home';
import { AppWrapper } from './components/HomeComponents';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Curriculum from './pages/Curriculum';

function App() {
  return (
    <AppWrapper>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/curriculum" element={<Curriculum />} />
          </Routes>
        </BrowserRouter>
    </AppWrapper>
  );
}

export default App;
