import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MatchDetailPage from './pages/MatchDetailPage';

function App() {
  return (
    <Router>
      <div>
        <Header title="Spor Sonuçları" />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/match/:id" element={<MatchDetailPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
