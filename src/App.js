import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./components/Profile";
import MultiStepForm from "./pages/MultiStepForm";
import StockDetails from "./components/StockDetails";
import LandingPage from "./pages/LandingPage";
import NewsScreen from "./pages/NewsScreen";
import StockComparator from "./components/Stockcomparator";
const App = () => {
  return (
    <Routes>
      <Route path="/Complete your interests" element={<MultiStepForm/>} />
      <Route path="/" element={<LandingPage />} />
      <Route path="/news" element={<NewsScreen />} />
      <Route path="/home" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/stock/:ticker" element={<StockDetails />} />
      <Route path="/compare" element={<StockComparator />} />
    </Routes>
  );
};

export default App;
