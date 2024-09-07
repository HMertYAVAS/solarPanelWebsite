import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-logo">Firma Adı</a>
        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <li><a href="/" onClick={() => setIsOpen(false)}>Anasayfa</a></li>
          <li><a href="/products" onClick={() => setIsOpen(false)}>Ürünler</a></li>
          <li><a href="/about" onClick={() => setIsOpen(false)}>Hakkımızda</a></li>
          <li><a href="/contact" onClick={() => setIsOpen(false)}>İletişim</a></li>
        </ul>
        <div className="navbar-hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
