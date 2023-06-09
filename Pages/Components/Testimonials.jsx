import React from "react";

function Testimonials() {
  return (
    <section id="testimonials">
        <h2>Customer Reviews</h2>
        <div className="testimonial-container">
            <div className="testimonial-card">
                <img src="././images/review1.jpg" alt="Customer Profile"/>
                <h3>Customer 1</h3>
                <p>Review text from Customer 1</p>
            </div>
            <div className="testimonial-card">
                <img src="././images/review2.jpg" alt="Customer Profile"/>
                <h3>Customer 2</h3>
                <p>Review text from Customer 2</p>
            </div>
            <div className="testimonial-card">
                <img src="././images/review3.png" alt="Customer Profile"/>
                <h3>Customer 3</h3>
                <p>Review text from Customer 3</p>
            </div>
            <div className="testimonial-card">
                <img src="././images/review4.jpg" alt="Customer Profile"/>
                <h3>Customer 4</h3>
                <p>Review text from Customer 4</p>
            </div>
        </div>
    </section>

  );
}

export default Testimonials