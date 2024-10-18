import React from 'react';
import { useParams } from 'react-router-dom';
import './MatchDetailPage.css'; // CSS dosyasını import ediyoruz.

const MatchDetailPage = ({ matches }) => {
  const { id } = useParams();
  const matchDetail = matches.find(match => match.id === parseInt(id));

  if (!matchDetail) {
    return <p>Yükleniyor...</p>;
  }

  return (
    <div className="match-detail-grid">
      {/* Takım İsimleri */}
      <div className="team-names">
        <h1>{matchDetail.homeTeam} vs {matchDetail.awayTeam}</h1>
      </div>

      {/* Skor */}
      <div className="score">
        <h2>Skor: {matchDetail.score}</h2>
        <p>Tarih: {matchDetail.date} Saat: {matchDetail.time}</p>
        <p>Turnuva: {matchDetail.tournament}</p>
        <p>Durum: {matchDetail.status}</p>
      </div>

      {/* Maç İstatistikleri */}
      <div className="match-stats">
        <h3>Maç İstatistikleri</h3>
        <p>Topla Oynama: {matchDetail.stats.possession.home} - {matchDetail.stats.possession.away}</p>
        <p>Şutlar: {matchDetail.stats.shots.home} - {matchDetail.stats.shots.away}</p>
        <p>İsabetli Şutlar: {matchDetail.stats.shotsOnTarget.home} - {matchDetail.stats.shotsOnTarget.away}</p>
        <p>Kornerler: {matchDetail.stats.corners.home} - {matchDetail.stats.corners.away}</p>
        <p>Fauller: {matchDetail.stats.fouls.home} - {matchDetail.stats.fouls.away}</p>
        <p>Sarı Kartlar: {matchDetail.stats.yellowCards.home} - {matchDetail.stats.yellowCards.away}</p>
        <p>Kırmızı Kartlar: {matchDetail.stats.redCards.home} - {matchDetail.stats.redCards.away}</p>
        <p>Ofsaytlar: {matchDetail.stats.offsides.home} - {matchDetail.stats.offsides.away}</p>
      </div>

      {/* Takım Kadroları */}
      <div className="lineups">
        <div className="home-team">
          <h3>{matchDetail.homeTeam} İlk 11</h3>
          <ul>
            {matchDetail.homeLineup.map((player, index) => (
              <li key={index}>{player}</li>
            ))}
          </ul>
        </div>
        <div className="away-team">
          <h3>{matchDetail.awayTeam} İlk 11</h3>
          <ul>
            {matchDetail.awayLineup.map((player, index) => (
              <li key={index}>{player}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Gol Dakikaları: Bu kısmı görselde belirttiğin alana yerleştirdik */}
      <div className="goal-times">
        <h3>Gol Dakikaları</h3>
        <ul>
          {matchDetail.goals.map((goal, index) => (
            <li key={index}>{goal.minute}' - {goal.player} ({goal.team})</li>
          ))}
        </ul>
      </div>

      {/* Hakem Bilgileri */}
      <div className="referee-info">
        <h3>Hakem Bilgisi</h3>
        <p>{matchDetail.referee}</p>
      </div>
    </div>
  );
};

export default MatchDetailPage;
