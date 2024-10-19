// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Header için CSS dosyasını import ediyoruz

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Futbol Maçları</Link>
      </div>
      <nav className="nav-menu">
        <ul>
          <li><Link to="/">Ana Sayfa</Link></li>
          {/* Diğer menü öğeleri ekleyebilirsiniz */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
