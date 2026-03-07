import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { tmdbService, Movie } from '../services/tmdb';
import { MovieCard } from '../components/MovieCard';
import { Search as SearchIcon } from 'lucide-react';

export const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchSearch = async () => {
      if (!query) return;
      setLoading(true);
      try {
        const data = await tmdbService.searchMovies(query);
        setMovies(data.results);
      } catch (error) {
        console.error('Search error:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchSearch();
  }, [query]);

  return (
    <div className="pt-32 px-8 md:px-20 pb-20 min-h-screen">
      <div className="mb-12">
        <h1 className="text-4xl font-serif italic mb-2">Search Results</h1>
        <p className="text-white/40">Showing results for "{query}"</p>
      </div>

      {loading ? (
        <div className="flex justify-center py-20">
          <div className="w-12 h-12 border-4 border-brand-accent border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : movies.length > 0 ? (
        <div className="movie-grid">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-40 text-white/20">
          <SearchIcon size={80} strokeWidth={1} className="mb-6" />
          <p className="text-xl font-serif italic">No movies found for your search.</p>
        </div>
      )}
    </div>
  );
};
