import React from "react";
import Hero from "./Components/Hero"
import Highlights from "./Components/Highlights"
import Testimonials from './Components/Testimonials'
import About from "./Components/About"
import Footer from "./Components/Footer"

function HomePage() {
  return (
    <div>
        <Hero/>
        <Highlights/>
        <Testimonials/>
        <About/>
        <Footer/>
    </div>
  );
}

export default HomePage