import React from "react";
import Home from "./pages/Home";
import { AppWrapper } from "./components/Components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Curriculum from "./pages/Curriculum";
import Projects from "./pages/Projects";

function App() {
  return (
    <AppWrapper>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/curriculum" element={<Curriculum />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </BrowserRouter>
    </AppWrapper>
  );
}

export default App;
