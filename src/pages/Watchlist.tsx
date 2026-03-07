import { useWatchlist } from '../context/WatchlistContext';
import { MovieCard } from '../components/MovieCard';
import { Bookmark, Film } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Watchlist = () => {
  const { watchlist } = useWatchlist();

  return (
    <div className="pt-32 px-8 md:px-20 pb-20 min-h-screen bg-brand-bg">
      <div className="flex items-center gap-4 mb-12">
        <div className="w-12 h-12 bg-brand-accent/20 rounded-2xl flex items-center justify-center border border-brand-accent/30">
          <Bookmark className="text-brand-accent" size={24} />
        </div>
        <div>
          <h1 className="text-4xl font-serif italic tracking-tight">Your Watchlist</h1>
          <p className="text-white/40 text-sm uppercase tracking-widest font-medium">Movies you've saved for later</p>
        </div>
      </div>

      {watchlist.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-40 glass rounded-3xl border-dashed border-2 border-white/5">
          <Film className="text-white/10 mb-6" size={80} />
          <h2 className="text-2xl font-serif italic mb-2 text-white/60">Your watchlist is empty</h2>
          <p className="text-white/40 mb-8">Start exploring and save movies you want to watch!</p>
          <Link 
            to="/discover" 
            className="bg-brand-accent px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform"
          >
            Discover Movies
          </Link>
        </div>
      ) : (
        <div className="movie-grid">
          {watchlist.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};
