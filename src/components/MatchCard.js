import React from 'react';

const MatchCard = ({ homeTeam, awayTeam, score, date }) => {
  return (
    <div style={{
      border: '1px solid #ddd', padding: '1rem', margin: '1rem 0',
      borderRadius: '8px', backgroundColor: '#f9f9f9'
    }}>
      <h3>{homeTeam} vs {awayTeam}</h3>
      <p>Skor: {score}</p>
      <p>Tarih: {date}</p>
    </div>
  );
};

export default MatchCard;
