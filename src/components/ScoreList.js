import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './scoreList.css';

const ScoreList = () => {
  // Sabit örnek veriler
  const [matches, setMatches] = useState([
    { id: 1, homeTeam: "Barcelona", awayTeam: "Real Madrid", score: "2-1", date: "2024-10-17" },
    { id: 2, homeTeam: "Liverpool", awayTeam: "Manchester City", score: "3-3", date: "2024-10-18" },
    { id: 3, homeTeam: "Juventus", awayTeam: "Inter Milan", score: "1-0", date: "2024-10-19" }
  ]);

  // useEffect kısmını boş bırakabiliriz çünkü API ile çalışmıyoruz.
  useEffect(() => {
    // Burada veri fetch yapmamıza gerek yok çünkü sabit verilerle çalışıyoruz.
  }, []);

  return (
    <div className="score-list-container">
      <h1>Spor Sonuçları</h1>
      {matches.length === 0 ? (
        <p>Yükleniyor...</p>
      ) : (
        matches.map((match) => (
          <div key={match.id} className="score-item">
            <h2>{match.homeTeam} vs {match.awayTeam}</h2>
            <p>Skor: {match.score}</p>
            <p>Tarih: {match.date}</p>
            <Link to={`/match/${match.id}`}>
              <button>Detaya Git</button>
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default ScoreList;
