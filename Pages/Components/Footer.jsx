import React from "react";

function Footer() {
  return (
    <footer>
        <ul className="footer-nav">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#reserve">Reserve a Table</a></li>
            <li><a href="#order">Online Order</a></li>
            <li><a href="#login">Login</a></li>
        </ul>
        <div className="footer-contact-info">
            <p>123 Main St, City, State</p>
            <p>Phone: 123-456-7890</p>
            <p>Email: info@example.com</p>
        </div>
        <div className="footer-social-media">
            <a href="#"><img src="https://via.placeholder.com/30x30" alt="Facebook"/></a>
            <a href="#"><img src="https://via.placeholder.com/30x30" alt="Instagram"/></a>
            <a href="#"><img src="https://via.placeholder.com/30x30" alt="Twitter"/></a>
        </div>
        <p>&copy; 2023 Mainstream Bar and Grill. All rights reserved.</p>
    </footer>
  );
}

export default Footer