import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import AboutMe from "./pages/AboutMe/AboutMe";
import Experience from "./pages/Experience/Experience";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ThankYou from "./pages/Contact/ThankYou";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Hero />}></Route>
          <Route path="/about-me" element={<AboutMe />}></Route>
          <Route path="/experience" element={<Experience />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/contact/thank-you" element={<ThankYou />}></Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
