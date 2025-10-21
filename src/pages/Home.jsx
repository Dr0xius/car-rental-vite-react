import Landing from "../components/Landing.jsx";
import Features from "../components/Features";
import Banner from "../components/Banner";
import Choose from "../components/Choose";
import Testimonials from "../components/Testimonials";
import Download from "../components/Download";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Models from "./Models.jsx";

import React from "react";

const Home = () => {
  return (
    <>
      <Landing />
      <Features />
      <Banner />
      <Choose />
      <Testimonials />
      <Download />
    </>
  );
};

export default Home;
