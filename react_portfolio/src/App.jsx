import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experiance from "./components/Experiance";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


const App = () => {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <Hero></Hero>
        <Skills></Skills>
        <Experiance></Experiance>
        <Projects></Projects>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </>
  );
};

export default App;
