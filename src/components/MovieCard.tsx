import { Star, Play } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Movie, getImageUrl } from '../services/tmdb';

interface MovieCardProps {
  movie: Movie;
  key?: string | number;
}

export const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
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
          <div className="flex items-center gap-2 mb-2">
            <div className="bg-brand-accent p-2 rounded-full">
              <Play size={16} fill="white" />
            </div>
            <div className="flex items-center gap-1 text-xs font-bold">
              <Star size={12} className="text-yellow-400 fill-yellow-400" />
              {movie.vote_average.toFixed(1)}
            </div>
          </div>
          <h3 className="text-lg font-bold leading-tight mb-1">{movie.title}</h3>
          <p className="text-xs text-white/60 line-clamp-2">{movie.overview}</p>
        </div>

        <div className="absolute top-4 right-4 glass px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
          {new Date(movie.release_date).getFullYear()}
        </div>
      </Link>
    </motion.div>
  );
};
