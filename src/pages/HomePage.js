import React from 'react';
import MatchCard from '../components/MatchCard';

const HomePage = ({ matches }) => {
  return (
    <div>
      <h1>Spor Sonuçları</h1>
      {matches.map(match => (
        <MatchCard key={match.id} match={match} />
      ))}
    </div>
  );
};

export default HomePage;
