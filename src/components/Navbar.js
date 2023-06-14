import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">MATH-MAGICIAN</div>
      <ul className="navbar-list">
        <li><Link to="/" className="navbar-link">Home</Link></li>
        <li><Link to="/calculator" className="navbar-link">Calculator</Link></li>
        <li><Link to="/quote" className="navbar-link">Quotes</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
