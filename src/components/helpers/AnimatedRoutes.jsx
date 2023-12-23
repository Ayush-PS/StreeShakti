import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import { AnimatePresence } from "framer-motion";
import Location from "../Pages/Location";
import React from 'react';
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>} />
        <Route path="/Location" element={<Location/>} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;