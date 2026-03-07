import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { MovieDetails } from './pages/MovieDetails';
import { Search } from './pages/Search';
import { Trending } from './pages/Trending';
import { Genres } from './pages/Genres';
import { GenreMovies } from './pages/GenreMovies';
import { Discover } from './pages/Discover';
import { TopRated } from './pages/TopRated';
import { Watchlist } from './pages/Watchlist';
import { WatchlistProvider } from './context/WatchlistContext';

export default function App() {
  return (
    <WatchlistProvider>
      <Router>
        <div className="min-h-screen bg-brand-bg text-white selection:bg-brand-accent selection:text-white">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movie/:id" element={<MovieDetails />} />
              <Route path="/search" element={<Search />} />
              <Route path="/trending" element={<Trending />} />
              <Route path="/genres" element={<Genres />} />
              <Route path="/genre/:id" element={<GenreMovies />} />
              <Route path="/discover" element={<Discover />} />
              <Route path="/top-rated" element={<TopRated />} />
              <Route path="/watchlist" element={<Watchlist />} />
              {/* Fallback for other routes */}
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
        
        <footer className="py-20 px-8 md:px-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-serif italic tracking-tighter">CineQuest</span>
            <span className="text-white/20 text-sm">© 2026</span>
          </div>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-white/40">
            <a href="#" className="hover:text-brand-accent transition-colors">Privacy</a>
            <a href="#" className="hover:text-brand-accent transition-colors">Terms</a>
            <a href="#" className="hover:text-brand-accent transition-colors">Contact</a>
          </div>
        </footer>
      </div>
      </Router>
    </WatchlistProvider>
  );
}
