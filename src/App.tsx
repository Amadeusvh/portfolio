import React from 'react';
import Home from './pages/Home';
import { AppWrapper } from './components/components';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <AppWrapper>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
    </AppWrapper>
  );
}

export default App;
