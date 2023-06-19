import React from "react";

function Hero() {
  return (
    <section id="home">
    <div className="hero-content">
      <h1>Welcome to Mainstream Bar and Grill</h1>
      <p>We offer the best food and drinks in the city. Come and join us for an unforgettable dining experience.</p>
      <button>Reserve a Table</button>
    </div>
    <div className="hero-image">
      <img src="../../../images/storefront.jpg" alt="Restaurant Image"/>
    </div>
  </section>
  );
}

export default Hero
