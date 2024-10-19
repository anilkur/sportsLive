// src/pages/HomePage.js
import React, { useEffect, useState } from 'react';
import MatchCard from '../components/MatchCard';
import './HomePage.css'; // HomePage için CSS dosyasını import ediyoruz

const HomePage = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await fetch('/matches'); // Proxy kullanıyorsanız relative path
        // Eğer proxy kullanmıyorsanız, 'http://localhost:5000/matches' kullanın
        // const response = await fetch('http://localhost:5000/matches');
        if (!response.ok) {
          throw new Error('Ağ yanıtı düzgün değil');
        }
        const data = await response.json();
        setMatches(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
  }, []);

  if (loading) return <p>Yükleniyor...</p>;
  if (error) return <p>Hata: {error}</p>;

  return (
    <div className="home-page">
      <header className="home-header">
        <h1>Maçlar Listesi</h1>
      </header>
      <div className="matches-container">
        {matches.map(match => (
          <MatchCard key={match.id} match={match} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
