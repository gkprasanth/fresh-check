import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";

import Navbar from "./components/Navbar";
import VegetablesPage from "./pages/VegetablesPage";

import FruitsPage from "./pages/FruitsPage";


import MapPage from "./pages/MapPage";


import Home from "./pages/Home";

import Signup from "./pages/Signup"
import GardeningTips from "./pages/GardeningTips";
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
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/vegetables" element={<VegetablesPage />} />
        <Route path="/fruits" element={<FruitsPage />} />
        <Route path="/maps" element={<MapPage />} />
        <Route path="/gardening" element={<GardeningTips  />} />
      </Routes>
    </Router>
  );
};

export default App;
