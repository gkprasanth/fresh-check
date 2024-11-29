import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import GardeningTips from "./pages/GardeningTips";
import MarketsNearby from "./pages/MarketsNearby";
import VegFruitsGuide from "./pages/VegFruitsGuide";
import Navbar from "./components/Navbar";

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    setUser(null); // Clear the user state on logout
  };

  return (
    <Router>
      <Navbar user={user} onLogout={handleLogout} />
      <Routes>
        <Route
          path="/"
          element={<Login onLogin={(userData) => setUser(userData)} />}
        />
        <Route path="/home" element={<HomePage />} />
        <Route path="/gardening-tips" element={<GardeningTips />} />
        <Route path="/markets-nearby" element={<MarketsNearby />} />
        <Route path="/veg-fruits-guide" element={<VegFruitsGuide />} />
      </Routes>
    </Router>
  );
};

export default App;
