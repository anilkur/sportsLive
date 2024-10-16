import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MatchDetailPage = () => {
  const { id } = useParams();
  const [matchDetail, setMatchDetail] = useState(null);

  useEffect(() => {
    fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupevent.php?id=${id}`)
      .then(response => response.json())
      .then(data => setMatchDetail(data.events[0]))
      .catch(error => console.error("Detay verisi çekme hatası:", error));
  }, [id]);

  if (!matchDetail) {
    return <p>Yükleniyor...</p>;
  }

  return (
    <div className="match-detail">
      <h1>{matchDetail.strEvent}</h1>
      <p>Tarih: {matchDetail.dateEvent}</p>
      <p>Ev Sahibi: {matchDetail.strHomeTeam}</p>
      <p>Deplasman: {matchDetail.strAwayTeam}</p>
      <p>Skor: {matchDetail.intHomeScore} - {matchDetail.intAwayScore}</p>
    </div>
  );
};

export default MatchDetailPage;
