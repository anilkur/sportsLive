// src/pages/MatchDetailPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './MatchDetailPage.css'; // CSS dosyasını import ediyoruz.

const MatchDetailPage = () => {
  const { id } = useParams();
  const [matchDetail, setMatchDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMatchDetail = async () => {
      try {
        const response = await fetch(`/matches/${id}`); // Proxy kullanıyorsanız relative path
        // Eğer proxy kullanmıyorsanız, `http://localhost:5000/matches/${id}` kullanın
        // const response = await fetch(`http://localhost:5000/matches/${id}`);
        if (!response.ok) {
          throw new Error('Ağ yanıtı düzgün değil');
        }
        const data = await response.json();
        setMatchDetail(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMatchDetail();
  }, [id]);

  if (loading) return <p>Yükleniyor...</p>;
  if (error) return <p>Hata: {error}</p>;
  if (!matchDetail) return <p>Maç bulunamadı</p>;

  const {
    homeTeam,
    awayTeam,
    homeLogo,
    awayLogo,
    score,
    date,
    time,
    tournament,
    status,
    homeLineup,
    awayLineup,
    homeSubstitutes,
    awaySubstitutes,
    goals,
    stats,
    referee,
    stadium,
    weather,
    criticalEvents
  } = matchDetail;

  return (
    <div className="match-detail-grid">
      {/* Takım İsimleri ve Logolar */}
      <div className="team-names">
        <div className="team">
          <img src={homeLogo} alt={homeTeam} className="team-logo" />
          <h1>{homeTeam}</h1>
        </div>
        <span>vs</span>
        <div className="team">
          <img src={awayLogo} alt={awayTeam} className="team-logo" />
          <h1>{awayTeam}</h1>
        </div>
      </div>

      {/* Skor ve Genel Bilgiler */}
      <div className="score">
        <h2>Skor: {score}</h2>
        <p>Tarih: {date} Saat: {time}</p>
        <p>Turnuva: {tournament}</p>
        <p>Durum: {status}</p>
        <p>Stadyum: {stadium}</p>
        <p>Hava Durumu: {weather}</p>
      </div>

      {/* Maç İstatistikleri */}
      <div className="match-stats">
        <h3>Maç İstatistikleri</h3>
        <p>Topla Oynama: {stats.possession.home} - {stats.possession.away}</p>
        <p>Şutlar: {stats.shots.home} - {stats.shots.away}</p>
        <p>İsabetli Şutlar: {stats.shotsOnTarget.home} - {stats.shotsOnTarget.away}</p>
        <p>Kornerler: {stats.corners.home} - {stats.corners.away}</p>
        <p>Fauller: {stats.fouls.home} - {stats.fouls.away}</p>
        <p>Sarı Kartlar: {stats.yellowCards.home} - {stats.yellowCards.away}</p>
        <p>Kırmızı Kartlar: {stats.redCards.home} - {stats.redCards.away}</p>
        <p>Ofsaytlar: {stats.offsides.home} - {stats.offsides.away}</p>
      </div>

      {/* Takım Kadroları */}
      <div className="lineups">
        <div className="home-team">
          <h3>{homeTeam} İlk 11</h3>
          <ul>
            {homeLineup.map((player, index) => (
              <li key={index} className="player">{player}</li>
            ))}
          </ul>
          <h4>Yedekler</h4>
          <ul>
            {homeSubstitutes.map((player, index) => (
              <li key={index} className="player">{player}</li>
            ))}
          </ul>
        </div>
        <div className="away-team">
          <h3>{awayTeam} İlk 11</h3>
          <ul>
            {awayLineup.map((player, index) => (
              <li key={index} className="player">{player}</li>
            ))}
          </ul>
          <h4>Yedekler</h4>
          <ul>
            {awaySubstitutes.map((player, index) => (
              <li key={index} className="player">{player}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Gol Dakikaları */}
      <div className="goal-times">
        <h3>Gol Dakikaları</h3>
        <ul>
          {goals.map((goal, index) => (
            <li key={index}>{goal.minute}' - {goal.player} ({goal.team})</li>
          ))}
        </ul>
      </div>

      {/* Hakem Bilgileri */}
      <div className="referee-info">
        <h3>Hakem Bilgisi</h3>
        <p>{referee}</p>
      </div>

      {/* Kritik Olaylar */}
      <div className="critical-events">
        <h3>Kritik Olaylar</h3>
        <ul>
          {criticalEvents.map((event, index) => (
            <li key={index}>{event}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MatchDetailPage;
