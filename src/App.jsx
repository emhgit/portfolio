import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import NavBar from "./features/NavBar/NavBar";
import Hero from "./components/Hero";
import AboutMe from "./pages/AboutMe";
import MyProjects from "./pages/MyProjects";
import Contact from "./pages/Contact";


function App() {
  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path="/about-me" element={<AboutMe />}></Route>
          <Route path="/my-projects" element={<MyProjects />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </main>
    </>
  )
}

export default App;
