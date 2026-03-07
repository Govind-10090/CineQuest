import { useEffect, useState, useCallback, useRef } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { tmdbService, Movie } from '../services/tmdb';
import { MovieCard } from '../components/MovieCard';
import { Loader2, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const GenreMovies = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const genreName = searchParams.get('name') || 'Genre';
  const navigate = useNavigate();
  
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
      if (!id) return;
      try {
        const data = await tmdbService.discoverMovies({ with_genres: id, page: 1 });
        setMovies(data.results);
        setHasMore(data.page < data.total_pages && data.results.length < 200);
      } catch (error) {
        console.error('Error fetching genre movies:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchInitialData();
  }, [id]);

  useEffect(() => {
    if (page === 1 || !id) return;
    
    const fetchMoreData = async () => {
      setLoadingMore(true);
      try {
        const data = await tmdbService.discoverMovies({ with_genres: id, page });
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
        console.error('Error fetching more genre movies:', error);
      } finally {
        setLoadingMore(false);
      }
    };
    fetchMoreData();
  }, [page, id]);

  if (loading) return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-brand-accent border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  return (
    <div className="pt-32 px-8 md:px-20 pb-20 min-h-screen bg-brand-bg">
      <button 
        onClick={() => navigate('/genres')}
        className="flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8 group"
      >
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        Back to Genres
      </button>

      <div className="mb-12">
        <h1 className="text-4xl font-serif italic tracking-tight">{genreName} Movies</h1>
        <p className="text-white/40 text-sm uppercase tracking-widest font-medium">Discover the best in {genreName.toLowerCase()}</p>
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

      {!hasMore && movies.length > 0 && (
        <div className="text-center mt-12 text-white/40 font-serif italic">
          {movies.length >= 200 ? "Limit of 200 movies reached." : "You've reached the end of the list."}
        </div>
      )}
    </div>
  );
};
