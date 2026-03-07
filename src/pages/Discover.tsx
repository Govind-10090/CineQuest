import { useEffect, useState, useCallback, useRef } from 'react';
import { tmdbService, Movie, Genre } from '../services/tmdb';
import { MovieCard } from '../components/MovieCard';
import { Loader2, Compass } from 'lucide-react';

export const Discover = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<string>('');
  const [minRating, setMinRating] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  
  const observer = useRef<IntersectionObserver | null>(null);
  const lastMovieElementRef = useCallback((node: HTMLDivElement | null) => {
    if (loadingMore) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore && movies.length < 200) {
        setPage(prevPage => prevPage + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, [loadingMore, hasMore, movies.length]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const data = await tmdbService.getGenres();
        setGenres(data);
      } catch (error) {
        console.error('Error fetching genres:', error);
      }
    };
    fetchGenres();
  }, []);

  useEffect(() => {
    const fetchInitialData = async () => {
      setLoading(true);
      setPage(1);
      try {
        const data = await tmdbService.discoverMovies({ 
          with_genres: selectedGenre, 
          'vote_average.gte': minRating,
          page: 1 
        });
        setMovies(data.results);
        setHasMore(data.page < data.total_pages && data.results.length < 200);
      } catch (error) {
        console.error('Error discovering movies:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchInitialData();
  }, [selectedGenre, minRating]);

  useEffect(() => {
    if (page === 1) return;
    
    const fetchMoreData = async () => {
      setLoadingMore(true);
      try {
        const data = await tmdbService.discoverMovies({ 
          with_genres: selectedGenre, 
          'vote_average.gte': minRating,
          page 
        });
        setMovies(prev => {
          const newMovies = [...prev, ...data.results];
          if (newMovies.length >= 200) {
            setHasMore(false);
            return newMovies.slice(0, 200);
          }
          setHasMore(data.page < data.total_pages);
          return newMovies;
        });
      } catch (error) {
        console.error('Error fetching more discovered movies:', error);
      } finally {
        setLoadingMore(false);
      }
    };
    fetchMoreData();
  }, [page, selectedGenre, minRating]);

  return (
    <div className="pt-32 px-8 md:px-20 pb-20 min-h-screen bg-brand-bg">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-brand-accent/20 rounded-2xl flex items-center justify-center border border-brand-accent/30">
            <Compass className="text-brand-accent" size={24} />
          </div>
          <div>
            <h1 className="text-4xl font-serif italic tracking-tight">Discover</h1>
            <p className="text-white/40 text-sm uppercase tracking-widest font-medium">Find your next favorite cinematic experience</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2 glass px-4 py-2 rounded-full">
            <select 
              className="bg-transparent text-sm focus:outline-none cursor-pointer"
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
            >
              <option value="" className="bg-brand-bg">All Genres</option>
              {genres.map(g => (
                <option key={g.id} value={g.id} className="bg-brand-bg">{g.name}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2 glass px-4 py-2 rounded-full">
            <span className="text-sm text-white/40">Min Rating:</span>
            <select 
              className="bg-transparent text-sm focus:outline-none cursor-pointer"
              value={minRating}
              onChange={(e) => setMinRating(Number(e.target.value))}
            >
              {[0, 3, 5, 7, 8, 9].map(r => (
                <option key={r} value={r} className="bg-brand-bg">{r}+ Stars</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center py-40">
          <div className="w-12 h-12 border-4 border-brand-accent border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
          <div className="movie-grid">
            {movies.map((movie, index) => {
              if (movies.length === index + 1) {
                return (
                  <div ref={lastMovieElementRef} key={`${movie.id}-${index}`}>
                    <MovieCard movie={movie} />
                  </div>
                );
              } else {
                return <MovieCard key={`${movie.id}-${index}`} movie={movie} />;
              }
            })}
          </div>

          {loadingMore && (
            <div className="flex justify-center mt-12">
              <Loader2 className="animate-spin text-brand-accent" size={32} />
            </div>
          )}

          {!hasMore && movies.length > 0 && (
            <div className="text-center mt-12 text-white/40 font-serif italic">
              {movies.length >= 200 ? "Limit of 200 movies reached." : "You've reached the end of the list."}
            </div>
          )}
        </>
      )}
    </div>
  );
};
