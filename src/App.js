import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Components/Register/Register";
import SignIn from "./Components/Pages/SignIn";
import Favorites from "./Components/Pages/Favorites";
import EditProfile from "./Components/Pages/EditPro";
import Results from "./Components/Pages/Results";
import Home from "./Components/Pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/results" element={<Results />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
