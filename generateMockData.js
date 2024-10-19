// generateMockData.js
const fs = require('fs');

const leagues = {
  "La Liga": [
    "Barcelona",
    "Real Madrid",
    "Atletico Madrid",
    "Sevilla",
    "Valencia",
    "Villarreal",
    "Real Sociedad",
    "Athletic Bilbao",
    "Getafe",
    "Levante"
  ],
  "Premier League": [
    "Liverpool",
    "Manchester City",
    "Chelsea",
    "Arsenal",
    "Manchester United",
    "Tottenham Hotspur",
    "Leicester City",
    "Everton",
    "West Ham United",
    "Leeds United"
  ],
  "Serie A": [
    "Juventus",
    "Inter Milan",
    "AC Milan",
    "Napoli",
    "Roma",
    "Lazio",
    "Atalanta",
    "Fiorentina",
    "Torino",
    "Udinese"
  ],
  "Bundesliga": [
    "Bayern Munich",
    "Borussia Dortmund",
    "RB Leipzig",
    "Bayer Leverkusen",
    "Borussia Mönchengladbach",
    "Eintracht Frankfurt",
    "VfL Wolfsburg",
    "Hertha BSC",
    "FC Schalke 04",
    "VfB Stuttgart"
  ],
  "Ligue 1": [
    "Paris Saint-Germain",
    "Lyon",
    "Marseille",
    "Monaco",
    "Lille",
    "Nice",
    "Rennes",
    "Montpellier",
    "Nantes",
    "Reims"
  ]
};

const leagueNames = Object.keys(leagues);

// Fonksiyon: Takım logosunu al (placeholder kullanılıyor)
const getTeamLogo = (teamName) => {
  return `https://via.placeholder.com/50?text=${encodeURIComponent(teamName)}`;
};

const generateMatches = (existingMatches, num) => {
  const matches = [...existingMatches];
  const startingId = existingMatches.length > 0 ? existingMatches[existingMatches.length - 1].id + 1 : 1;

  for (let i = startingId; i < startingId + num; i++) {
    // Rastgele bir lig seç
    const league = leagueNames[Math.floor(Math.random() * leagueNames.length)];
    const teams = leagues[league];

    // Rastgele ev sahibi ve deplasman takımları seç, aynı takım seçmemek için kontrol et
    let homeTeam = teams[Math.floor(Math.random() * teams.length)];
    let awayTeam = teams[Math.floor(Math.random() * teams.length)];

    while (awayTeam === homeTeam) {
      awayTeam = teams[Math.floor(Math.random() * teams.length)];
    }

    matches.push({
      id: i,
      homeTeam: homeTeam,
      awayTeam: awayTeam,
      homeLogo: getTeamLogo(homeTeam),
      awayLogo: getTeamLogo(awayTeam),
      score: `${Math.floor(Math.random() * 5)}-${Math.floor(Math.random() * 5)}`,
      date: `2024-10-${((i - 1) % 30) + 1}`, // 1-30 arası gün
      time: `${Math.floor(Math.random() * 24).toString().padStart(2, '0')}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
      tournament: league,
      status: "Tamamlandı",
      homeLineup: Array.from({ length: 11 }, (_, idx) => `Oyuncu ${homeTeam}-${idx + 1}`),
      awayLineup: Array.from({ length: 11 }, (_, idx) => `Oyuncu ${awayTeam}-${idx + 1}`),
      homeSubstitutes: Array.from({ length: 5 }, (_, idx) => `Oyuncu ${homeTeam}-Sub${idx + 1}`),
      awaySubstitutes: Array.from({ length: 5 }, (_, idx) => `Oyuncu ${awayTeam}-Sub${idx + 1}`),
      goals: [
        { minute: 15, player: `Oyuncu ${homeTeam}-1`, team: homeTeam },
        { minute: 45, player: `Oyuncu ${awayTeam}-1`, team: awayTeam },
        { minute: 75, player: `Oyuncu ${homeTeam}-2`, team: homeTeam }
      ],
      stats: {
        possession: { home: `${50 + Math.floor(Math.random() * 50)}%`, away: `${100 - (50 + Math.floor(Math.random() * 50))}%` },
        shots: { home: Math.floor(Math.random() * 20), away: Math.floor(Math.random() * 20) },
        shotsOnTarget: { home: Math.floor(Math.random() * 10), away: Math.floor(Math.random() * 10) },
        corners: { home: Math.floor(Math.random() * 15), away: Math.floor(Math.random() * 15) },
        fouls: { home: Math.floor(Math.random() * 25), away: Math.floor(Math.random() * 25) },
        yellowCards: { home: Math.floor(Math.random() * 5), away: Math.floor(Math.random() * 5) },
        redCards: { home: Math.floor(Math.random() * 2), away: Math.floor(Math.random() * 2) },
        offsides: { home: Math.floor(Math.random() * 10), away: Math.floor(Math.random() * 10) }
      },
      referee: `Hakem ${i}`,
      stadium: `Stadyum ${i}`,
      weather: ["Clear", "Rainy", "Cloudy", "Stormy"][Math.floor(Math.random() * 4)],
      criticalEvents: [
        `Oyuncu ${homeTeam}-1 sakatlandı`,
        `Oyuncu ${awayTeam}-2 sarı kart gördü`
      ]
    });
  }

  return matches;
};

// db.json dosyasını oku
const rawData = fs.readFileSync('db.json', 'utf-8');
const data = JSON.parse(rawData);

// Yeni maç verilerini oluştur (47)
const newMatches = generateMatches(data.matches, 47);

// db.json dosyasını güncelle
const updatedData = { matches: newMatches };

fs.writeFileSync('db.json', JSON.stringify(updatedData, null, 2), 'utf-8');
console.log('50 maç verisi oluşturuldu ve db.json dosyasına kaydedildi.');
