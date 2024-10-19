// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MatchDetailPage from './pages/MatchDetailPage';
import './App.css'; // Genel uygulama stilleri

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/match/:id" element={<MatchDetailPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
