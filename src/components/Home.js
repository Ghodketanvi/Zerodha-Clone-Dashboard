import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./Landing";              // change this if your landing component has a different name or path
import Dashboard from "./dashboard/Dashboard";

const Home = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/dashboard/*" element={<Dashboard />} />
    </Routes>
  );
};

export default Home;