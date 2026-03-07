import { useEffect, useState, useCallback, useRef } from 'react';
import { tmdbService, Movie } from '../services/tmdb';
import { MovieCard } from '../components/MovieCard';
import { Loader2, TrendingUp } from 'lucide-react';

export const Trending = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
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
    const fetchInitialData = async () => {
      try {
        const data = await tmdbService.getTrending(1);
        setMovies(data.results);
        setHasMore(data.page < data.total_pages && data.results.length < 200);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchInitialData();
  }, []);

  useEffect(() => {
    if (page === 1) return;
    
    const fetchMoreData = async () => {
      setLoadingMore(true);
      try {
        const data = await tmdbService.getTrending(page);
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
        console.error('Error fetching more trending movies:', error);
      } finally {
        setLoadingMore(false);
      }
    };
    fetchMoreData();
  }, [page]);

  if (loading) return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-brand-accent border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  return (
    <div className="pt-32 px-8 md:px-20 pb-20 min-h-screen bg-brand-bg">
      <div className="flex items-center gap-4 mb-12">
        <div className="w-12 h-12 bg-brand-accent/20 rounded-2xl flex items-center justify-center border border-brand-accent/30">
          <TrendingUp className="text-brand-accent" size={24} />
        </div>
        <div>
          <h1 className="text-4xl font-serif italic tracking-tight">Trending Movies</h1>
          <p className="text-white/40 text-sm uppercase tracking-widest font-medium">Daily top picks from around the world</p>
        </div>
      </div>

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

      {!hasMore && (
        <div className="text-center mt-12 text-white/40 font-serif italic">
          {movies.length >= 200 ? "Limit of 200 movies reached." : "You've reached the end of the trending list."}
        </div>
      )}
    </div>
  );
};
