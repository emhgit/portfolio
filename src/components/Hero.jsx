import React from 'react'

const Hero = () => {
  return (
    <main>
        <div id="image-container">
            <img src="src\assets\image-1.jpg" alt="image-1" width="200"  />
        </div>

        <section id="hero">
            <h1>Elliott Harper</h1>
            <h2>Full-Stack Developer</h2>
            <div id="socials-container"></div>
            <button>About Me</button>
        </section>
    </main>
  )
}

export default Hero