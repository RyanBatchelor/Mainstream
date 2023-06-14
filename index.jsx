import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import HomePage from './Pages/home'
import Menu from './Pages/menu'
import Order from './Pages/order'
import ReserveTable from './Pages/reserveTable'


function Layout() {
  return(
  <div>
    <input type="checkbox" id="hamburger-menu-toggle" className="hamburger-menu"/>
    <label htmlFor="hamburger-menu-toggle" className="hamburger-menu-icon">
      <span></span>
      <span></span>
      <span></span>
    </label>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><a href="#about">About</a></li>
        <li><Link to="/menu"> Menu</Link></li>
        <li><Link to="/reserveTable"> Reserve A Table</Link></li>
        <li><Link to="/order"> Order</Link></li>
        <li><a href="#login">Login</a></li>
      </ul>
    </nav>
    <Outlet />
    </div>
  )
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="menu" element={<Menu />} />
          <Route path="order" element={<Order />} />
          <Route path="reserveTable" element={<ReserveTable />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />)