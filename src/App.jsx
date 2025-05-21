import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import AboutMe from "./pages/AboutMe";
import MyProjects from "./pages/MyProjects";
import Contact from "./pages/Contact";
import Footer from './components/Footer/Footer';


function App() {
  return (
    <>
      <NavBar />    
      <main>
        <Routes>
          <Route path="/" element={<Hero />}></Route>
          <Route path="/about-me" element={<AboutMe />}></Route>
          <Route path="/my-projects" element={<MyProjects />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App;
