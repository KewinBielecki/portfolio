import React from 'react';
import './App.css';
import Header from "./Components/Header/header";
import Navbar from "./Components/Navbar/navbar";
import AboutUs from "./Components/About/about";
import Skills from "./Components/Skills/skills";
import Projects from "./Components/Projects/projects";
import Contact from "./Components/Contact/contact";
import Footer from "./Components/Footer/footer";

function App() {
  return (
      <div id="container">
        <Header />
        <Navbar />
        <AboutUs />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
