import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './scoreList.css';

const ScoreList = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    fetch("https://live-world-futbol-news.p.rapidapi.com/news/eurosport", {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'live-world-futbol-news.p.rapidapi.com',
        'x-rapidapi-key': '8e8493381emshdb19a983e2e5f08p12b8eajs457369bc1634'
      }
    })
      .then(response => response.json())
      .then(data => {
        // `data`'nın hangi formatta olduğunu kontrol edelim ve dizi olarak ayarlayalım
        if (Array.isArray(data)) {
          setMatches(data);
        } else {
          console.error("Beklenen dizi değil:", data);
        }
      })
      .catch(error => console.error("Veri çekme hatası:", error));
  }, []);

  return (
    <div className="score-list-container">
      <h1>Spor Sonuçları</h1>
      {matches.length === 0 ? (
        <p>Yükleniyor...</p>
      ) : (
        matches.map((match, index) => (
          <div key={index} className="score-item">
            <h2>{match.title || "Başlık yok"}</h2>
            <Link to={`/match/${index}`}>
              <button>Detaya Git</button>
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default ScoreList;
