import React from 'react';
import { useParams } from 'react-router-dom';
import './MatchDetailPage.css'; // CSS dosyasını import ediyoruz

const MatchDetailPage = ({ matches }) => {
  const { id } = useParams();
  const matchDetail = matches.find(match => match.id === parseInt(id));

  if (!matchDetail) {
    return <p>Yükleniyor...</p>;
  }

  return (
    <div className="match-detail-container">
      <div className="match-detail-header">
        <div className="team-logos">
          <img src={matchDetail.homeLogo} alt={matchDetail.homeTeam} className="team-logo" />
          <h1>{matchDetail.homeTeam} vs {matchDetail.awayTeam}</h1>
          <img src={matchDetail.awayLogo} alt={matchDetail.awayTeam} className="team-logo" />
        </div>
      </div>

      <div className="match-info">
        <p>Skor: {matchDetail.score}</p>
        <p>Tarih: {matchDetail.date} Saat: {matchDetail.time}</p>
        <p>Turnuva: {matchDetail.tournament}</p>
        <p>Durum: {matchDetail.status}</p>
      </div>

      <div className="team-lineups">
        <h2>Takım Kadroları</h2>
        <div>
          <h3>{matchDetail.homeTeam} İlk 11</h3>
          <ul className="team-players">
            {matchDetail.homeLineup.map((player, index) => (
              <li key={index}>{player}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>{matchDetail.awayTeam} İlk 11</h3>
          <ul className="team-players">
            {matchDetail.awayLineup.map((player, index) => (
              <li key={index}>{player}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="goals">
        <h2>Gol Dakikaları</h2>
        <ul>
          {matchDetail.goals.map((goal, index) => (
            <li key={index}>{goal.minute}' - {goal.player} ({goal.team})</li>
          ))}
        </ul>
      </div>

      <div className="match-stats">
        <h2>Maç İstatistikleri</h2>
        <p>Topla Oynama: {matchDetail.stats.possession.home} - {matchDetail.stats.possession.away}</p>
        <p>Şutlar: {matchDetail.stats.shots.home} - {matchDetail.stats.shots.away}</p>
        <p>İsabetli Şutlar: {matchDetail.stats.shotsOnTarget.home} - {matchDetail.stats.shotsOnTarget.away}</p>
        <p>Kornerler: {matchDetail.stats.corners.home} - {matchDetail.stats.corners.away}</p>
        <p>Fauller: {matchDetail.stats.fouls.home} - {matchDetail.stats.fouls.away}</p>
        <p>Sarı Kartlar: {matchDetail.stats.yellowCards.home} - {matchDetail.stats.yellowCards.away}</p>
        <p>Kırmızı Kartlar: {matchDetail.stats.redCards.home} - {matchDetail.stats.redCards.away}</p>
        <p>Ofsaytlar: {matchDetail.stats.offsides.home} - {matchDetail.stats.offsides.away}</p>
      </div>

      <div className="referee-info">
        <h2>Hakem Bilgisi</h2>
        <p>{matchDetail.referee}</p>
      </div>

      <div className="stadium-weather">
        <h2>Stadyum ve Hava Durumu</h2>
        <p>Stadyum: {matchDetail.stadium}</p>
        <p>Hava Durumu: {matchDetail.weather}</p>
      </div>

      <div className="critical-events">
        <h2>Kritik Olaylar</h2>
        <ul>
          {matchDetail.criticalEvents.map((event, index) => (
            <li key={index}>{event}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MatchDetailPage;
