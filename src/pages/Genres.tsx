import { useEffect, useState } from 'react';
import { tmdbService, Genre } from '../services/tmdb';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Layers } from 'lucide-react';

export const Genres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const data = await tmdbService.getGenres();
        setGenres(data);
      } catch (error) {
        console.error('Error fetching genres:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchGenres();
  }, []);

  if (loading) return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-brand-accent border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  return (
    <div className="pt-32 px-8 md:px-20 pb-20 min-h-screen bg-brand-bg">
      <div className="flex items-center gap-4 mb-12">
        <div className="w-12 h-12 bg-brand-accent/20 rounded-2xl flex items-center justify-center border border-brand-accent/30">
          <Layers className="text-brand-accent" size={24} />
        </div>
        <div>
          <h1 className="text-4xl font-serif italic tracking-tight">Movie Genres</h1>
          <p className="text-white/40 text-sm uppercase tracking-widest font-medium">Explore cinema by your favorite categories</p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {genres.map((genre, index) => (
          <motion.div
            key={genre.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
          >
            <Link 
              to={`/genre/${genre.id}?name=${encodeURIComponent(genre.name)}`}
              className="group relative h-40 glass rounded-3xl flex items-center justify-center overflow-hidden hover:border-brand-accent/50 transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="text-xl font-serif italic group-hover:scale-110 transition-transform">{genre.name}</span>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
