import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './scoreList.css';

const ScoreList = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    fetch("https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=4328")
      .then(response => response.json())
      .then(data => setMatches(data.events))
      .catch(error => console.error("Veri çekme hatası:", error));
  }, []);

  return (
    <div className="score-list-container">
      <h1>Spor Sonuçları</h1>
      {matches.length === 0 ? (
        <p>Yükleniyor...</p>
      ) : (
        matches.map(match => (
          <div key={match.idEvent} className="score-item">
            <h2>{match.strEvent}</h2>
            <p>Skor: {match.intHomeScore} - {match.intAwayScore}</p>
            <p>Tarih: {match.dateEvent}</p>
            <Link to={`/match/${match.idEvent}`}>
              <button>Detaya Git</button>
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default ScoreList;
