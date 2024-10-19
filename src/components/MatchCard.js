// src/components/MatchCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './MatchCard.css';  // CSS dosyasını buradan import ediyoruz

const MatchCard = ({ match }) => {
  const {
    id,
    homeTeam,
    awayTeam,
    homeLogo,
    awayLogo,
    score,
    date,
    time,
    tournament,
    status
  } = match;

  return (
    <div className="match-card">
      <div className="teams-info">
        <div className="teams">
          <img src={homeLogo} alt={homeTeam} className="team-logo" />
          <h3>{homeTeam} vs {awayTeam}</h3>
          <img src={awayLogo} alt={awayTeam} className="team-logo" />
        </div>
      </div>
      <p>Skor: {score}</p>
      <p>Tarih ve Saat: {date} {time}</p>
      <p>Turnuva: {tournament}</p>
      <p>Durum: {status}</p>

      <Link to={`/match/${id}`}>
        <button className="details-button">Detaya Git</button>
      </Link>
    </div>
  );
};

export default MatchCard;
