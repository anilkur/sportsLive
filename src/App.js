import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MatchDetailPage from './pages/MatchDetailPage';

// Tüm maçları burada tanımlıyoruz
const mockMatches = [
  {
    id: 1,
    homeTeam: "Barcelona",
    awayTeam: "Real Madrid",
    homeLogo: "/path/to/barcelona-logo.png",
    awayLogo: "/path/to/real-madrid-logo.png",
    score: "2-1",
    date: "2024-10-17",
    time: "20:00",
    tournament: "La Liga",
    status: "Tamamlandı",
    homeLineup: ["Ter Stegen", "Piqué", "Alba", "Busquets", "Messi"],
    awayLineup: ["Courtois", "Ramos", "Modric", "Benzema"],
    homeSubstitutes: ["Griezmann", "Dembélé"],
    awaySubstitutes: ["Hazard", "Asensio"],
    goals: [
      { minute: 23, player: "Messi", team: "Barcelona" },
      { minute: 45, player: "Benzema", team: "Real Madrid" },
      { minute: 85, player: "Suárez", team: "Barcelona" }
    ],
    stats: {
      possession: { home: "55%", away: "45%" },
      shots: { home: 12, away: 9 },
      shotsOnTarget: { home: 5, away: 3 },
      corners: { home: 7, away: 4 },
      fouls: { home: 11, away: 8 },
      yellowCards: { home: 2, away: 1 },
      redCards: { home: 0, away: 0 },
      offsides: { home: 3, away: 2 }
    },
    referee: "Antonio Mateu Lahoz",
    stadium: "Camp Nou",
    weather: "Clear",
    criticalEvents: ["Piqué sakatlandı", "Messi'nin penaltı golü"]
  },
  {
    id: 2,
    homeTeam: "Liverpool",
    awayTeam: "Manchester City",
    homeLogo: "/path/to/liverpool-logo.png",
    awayLogo: "/path/to/man-city-logo.png",
    score: "3-3",
    date: "2024-10-18",
    time: "22:00",
    tournament: "Premier League",
    status: "Tamamlandı",
    homeLineup: ["Alisson", "Alexander-Arnold", "Van Dijk", "Salah", "Mane"],
    awayLineup: ["Ederson", "Stones", "Walker", "De Bruyne", "Sterling"],
    homeSubstitutes: ["Firmino", "Keita"],
    awaySubstitutes: ["Mahrez", "Jesus"],
    goals: [
      { minute: 15, player: "Salah", team: "Liverpool" },
      { minute: 34, player: "Sterling", team: "Manchester City" },
      { minute: 72, player: "Mane", team: "Liverpool" },
      { minute: 84, player: "De Bruyne", team: "Manchester City" }
    ],
    stats: {
      possession: { home: "50%", away: "50%" },
      shots: { home: 10, away: 12 },
      shotsOnTarget: { home: 6, away: 5 },
      corners: { home: 4, away: 5 },
      fouls: { home: 9, away: 10 },
      yellowCards: { home: 1, away: 2 },
      redCards: { home: 0, away: 0 },
      offsides: { home: 2, away: 1 }
    },
    referee: "Michael Oliver",
    stadium: "Anfield",
    weather: "Rainy",
    criticalEvents: ["Sterling sarı kart gördü", "Mane sakatlandı"]
  },
  {
    id: 3,
    homeTeam: "Juventus",
    awayTeam: "Inter Milan",
    homeLogo: "/path/to/juventus-logo.png",
    awayLogo: "/path/to/inter-milan-logo.png",
    score: "1-0",
    date: "2024-10-19",
    time: "21:00",
    tournament: "Serie A",
    status: "Tamamlandı",
    homeLineup: ["Szczesny", "Bonucci", "Chiellini", "Ronaldo", "Dybala"],
    awayLineup: ["Handanovic", "Skriniar", "De Vrij", "Hakimi", "Lukaku"],
    homeSubstitutes: ["Morata", "Kulusevski"],
    awaySubstitutes: ["Vidal", "Martinez"],
    goals: [
      { minute: 75, player: "Ronaldo", team: "Juventus" }
    ],
    stats: {
      possession: { home: "47%", away: "53%" },
      shots: { home: 8, away: 10 },
      shotsOnTarget: { home: 4, away: 3 },
      corners: { home: 5, away: 4 },
      fouls: { home: 10, away: 12 },
      yellowCards: { home: 2, away: 3 },
      redCards: { home: 0, away: 0 },
      offsides: { home: 1, away: 2 }
    },
    referee: "Daniele Orsato",
    stadium: "Allianz Stadium",
    weather: "Cloudy",
    criticalEvents: ["Lukaku'nun kaçırdığı penaltı"]
  }
];

function App() {
  return (
    <Router>
      <div>
        <Header title="Spor Sonuçları" />
        <Routes>
          <Route path="/" element={<HomePage matches={mockMatches} />} />
          {/* mockMatches prop'unu MatchDetailPage'e de geçiyoruz */}
          <Route path="/match/:id" element={<MatchDetailPage matches={mockMatches} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
