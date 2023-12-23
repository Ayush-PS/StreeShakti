import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import { AnimatePresence } from "framer-motion";
import Location from "../Pages/Location";
import React from 'react';
import PeriodTracker from "../Pages/PeriodTracker";
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About showImages={true}/>} />
        <Route path="/Location" element={<Location/>} />
        <Route path="/PeriodTracker" element={<PeriodTracker/>} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;