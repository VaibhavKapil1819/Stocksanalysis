import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./components/Profile";
import MultiStepForm from "./pages/MultiStepForm";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MultiStepForm/>} />
      <Route path="/home" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default App;
