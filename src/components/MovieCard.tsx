import { Star, Play, Bookmark, BookmarkCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Movie, getImageUrl, tmdbService } from '../services/tmdb';
import { useWatchlist } from '../context/WatchlistContext';

interface MovieCardProps {
  movie: Movie;
  key?: string | number;
}

export const MovieCard = ({ movie }: MovieCardProps) => {
  const { addToWatchlist, removeFromWatchlist, isInWatchlist } = useWatchlist();
  const [providers, setProviders] = useState<any[]>([]);
  const [hasFetched, setHasFetched] = useState(false);
  const isBookmarked = isInWatchlist(movie.id);

  const fetchProviders = async (e?: React.MouseEvent) => {
    if (hasFetched) return;
    try {
      const results = await tmdbService.getWatchProviders(movie.id);
      const regionData = results?.IN || results?.US || Object.values(results || {})[0] as any;
      const flatrate = regionData?.flatrate || regionData?.rent || regionData?.buy || [];
      setProviders(flatrate.slice(0, 3));
      setHasFetched(true);
    } catch (error) {
      console.error('Error fetching providers:', error);
    }
  };

  const handleWatchlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isBookmarked) {
      removeFromWatchlist(movie.id);
    } else {
      addToWatchlist(movie);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      onMouseEnter={fetchProviders}
      className="group relative aspect-[2/3] rounded-2xl overflow-hidden bg-white/5 cursor-pointer"
    >
      <Link to={`/movie/${movie.id}`}>
        <img
          src={getImageUrl(movie.poster_path)}
          alt={movie.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="bg-brand-accent p-2 rounded-full">
                <Play size={16} fill="white" />
              </div>
              <div className="flex items-center gap-1 text-xs font-bold">
                <Star size={12} className="text-yellow-400 fill-yellow-400" />
                {movie.vote_average.toFixed(1)}
              </div>
            </div>
            <button 
              onClick={handleWatchlist}
              className={`p-2 rounded-full glass transition-all hover:scale-110 ${isBookmarked ? 'bg-brand-accent text-white' : 'text-white/60 hover:text-white'}`}
            >
              {isBookmarked ? <BookmarkCheck size={18} /> : <Bookmark size={18} />}
            </button>
          </div>
          <h3 className="text-lg font-bold leading-tight mb-1">{movie.title}</h3>
          
          {/* Providers in Card */}
          {providers.length > 0 && (
            <div className="flex gap-1.5 mb-2">
              {providers.map((p: any) => (
                <img 
                  key={p.provider_id}
                  src={getImageUrl(p.logo_path, 'w92')}
                  alt={p.provider_name}
                  className="w-5 h-5 rounded-md border border-white/10"
                />
              ))}
            </div>
          )}
          
          <p className="text-[10px] text-white/60 line-clamp-2">{movie.overview}</p>
        </div>

        <div className="absolute top-4 left-4 glass px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
          {new Date(movie.release_date).getFullYear()}
        </div>
      </Link>
    </motion.div>
  );
};
