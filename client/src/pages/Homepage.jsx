import React, { useEffect } from "react";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Hero from "../components/Hero/Hero";
import ReactGA from "react-ga";
import Gallery from "../components/Gallery/Gallery.jsx";
import Tabs from "../components/Tabs/Tabs.jsx"


const Homepage = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <>
      <Hero />
      
      <About />
      <Tabs />
      <Gallery />
      <Contact />
    </>
  );
};

export default Homepage;
