import { useState } from 'react'
import './App.css'
import NavBar from "./features/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar />

      <div class="image-container">
        <img src="src\assets\image-1.jpg" alt="image-1" width="200"  />
      </div>

      <main id="hero">
        <h1>Elliott Harper</h1>
        <h2>Full-Stack Developer</h2>
        <div id="socials-container"></div>
        <button>About Me</button>
      </main>
      
    </>
  )
}

export default App;
