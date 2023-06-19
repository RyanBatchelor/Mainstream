import React from "react";

function About() {
  return (
    <section id="about">
        <h2>About Mainstream Bar and Grill</h2>
        <div className="about-columns">
            <div className="about-column">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id nibh sit amet est gravida congue ut vitae urna. Vestibulum dapibus facilisis lectus eu porttitor.</p>
            </div>
            <div className="about-column">
                <img src="images/burger.jpg" alt="Placeholder Image"/>
            </div>
        </div>
    </section>
  );
}

export default About