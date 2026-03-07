import { useEffect, useState, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { tmdbService, Movie, getImageUrl } from '../services/tmdb';
import { MovieCard } from '../components/MovieCard';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Info, ChevronRight, TrendingUp, ChevronLeft, Loader2 } from 'lucide-react';

export const Home = () => {
  const [trending, setTrending] = useState<Movie[]>([]);
  const [featuredMovies, setFeaturedMovies] = useState<Movie[]>([]);
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  
  const observer = useRef<IntersectionObserver | null>(null);
  const lastMovieElementRef = useCallback((node: HTMLDivElement | null) => {
    if (loadingMore) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore && trending.length < 200) {
        setPage(prevPage => prevPage + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, [loadingMore, hasMore, trending.length]);

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const data = await tmdbService.getTrending(1);
        setTrending(data.results);
        setFeaturedMovies(data.results.slice(0, 5));
        setHasMore(data.page < data.total_pages && data.results.length < 200);
      } catch (error) {
        console.error('Error fetching movies:', error);
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
        setTrending(prev => {
          const newTrending = [...prev, ...data.results];
          if (newTrending.length >= 200) {
            setHasMore(false);
            return newTrending.slice(0, 200);
          }
          setHasMore(data.page < data.total_pages);
          return newTrending;
        });
      } catch (error) {
        console.error('Error fetching more movies:', error);
      } finally {
        setLoadingMore(false);
      }
    };
    fetchMoreData();
  }, [page]);

  const nextFeatured = useCallback(() => {
    setFeaturedIndex((prev) => (prev + 1) % featuredMovies.length);
  }, [featuredMovies.length]);

  const prevFeatured = useCallback(() => {
    setFeaturedIndex((prev) => (prev - 1 + featuredMovies.length) % featuredMovies.length);
  }, [featuredMovies.length]);

  useEffect(() => {
    if (featuredMovies.length === 0) return;
    const interval = setInterval(nextFeatured, 8000);
    return () => clearInterval(interval);
  }, [nextFeatured, featuredMovies.length]);

  if (loading) return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-brand-accent border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  const currentFeatured = featuredMovies[featuredIndex];

  return (
    <div className="pb-20 overflow-x-hidden">
      {/* Hero Section - Horizontal Slider */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        <AnimatePresence mode="wait">
          {currentFeatured && (
            <motion.div
              key={currentFeatured.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <div className="absolute inset-0">
                <img 
                  src={getImageUrl(currentFeatured.backdrop_path, 'original')} 
                  alt={currentFeatured.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-bg via-brand-bg/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent" />
              </div>

              <div className="relative h-full flex flex-col justify-center px-8 md:px-20 max-w-4xl">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-brand-accent/20 text-brand-accent text-xs font-bold px-3 py-1 rounded-full border border-brand-accent/30 uppercase tracking-widest">
                      Featured Movie
                    </span>
                    <span className="text-white/60 text-sm font-medium">
                      {new Date(currentFeatured.release_date).getFullYear()}
                    </span>
                  </div>
                  <h1 className="text-6xl md:text-8xl font-serif italic mb-6 leading-none tracking-tighter">
                    {currentFeatured.title}
                  </h1>
                  <p className="text-lg text-white/70 mb-8 line-clamp-3 max-w-2xl leading-relaxed">
                    {currentFeatured.overview}
                  </p>
                  <div className="flex items-center gap-4">
                    <button className="bg-white text-black px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-brand-accent hover:text-white transition-all transform hover:scale-105">
                      <Play size={20} fill="currentColor" />
                      Watch Trailer
                    </button>
                    <button className="glass px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-white/10 transition-all">
                      <Info size={20} />
                      More Info
                    </button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Slider Controls */}
        <div className="absolute bottom-12 right-8 md:right-20 flex items-center gap-4 z-20">
          <div className="flex gap-2 mr-4">
            {featuredMovies.map((_, i) => (
              <button
                key={i}
                onClick={() => setFeaturedIndex(i)}
                className={`h-1 transition-all duration-300 rounded-full ${i === featuredIndex ? 'w-8 bg-brand-accent' : 'w-2 bg-white/20'}`}
              />
            ))}
          </div>
          <button 
            onClick={prevFeatured}
            className="p-3 glass rounded-full hover:bg-white/10 transition-all"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={nextFeatured}
            className="p-3 glass rounded-full hover:bg-white/10 transition-all"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </section>

      <section className="mt-12 relative z-10 px-8 md:px-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-serif italic">Trending Now</h2>
          <div className="flex items-center gap-4">
            <Link to="/trending" className="flex items-center gap-1 text-sm text-white/40 hover:text-brand-accent transition-colors">
              View All <ChevronRight size={16} />
            </Link>
          </div>
        </div>
        
        <div className="movie-grid">
          {trending.map((movie, index) => {
            if (trending.length === index + 1) {
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
            You've reached the end of the trending list.
          </div>
        )}
      </section>

      {/* Categories / Bento Grid Style */}
      <section className="px-8 md:px-20 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-auto md:h-[600px]">
          <Link 
            to="/genres"
            className="md:col-span-2 glass rounded-3xl p-10 flex flex-col justify-end relative overflow-hidden group min-h-[400px]"
          >
            <img 
              src="https://picsum.photos/seed/cinema/1200/800" 
              className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="relative z-10">
              <h3 className="text-4xl font-serif italic mb-4">Curated Collections</h3>
              <p className="text-white/60 max-w-md mb-6">Explore our hand-picked selections of cinematic masterpieces across all genres.</p>
              <div className="bg-brand-accent inline-block px-6 py-3 rounded-full text-sm font-bold uppercase tracking-widest">Explore Now</div>
            </div>
          </Link>
          <Link 
            to="/top-rated"
            className="glass rounded-3xl p-10 flex flex-col justify-between border-brand-accent/20 min-h-[300px] group hover:border-brand-accent/50 transition-all"
          >
            <TrendingUp className="text-brand-accent group-hover:scale-110 transition-transform" size={40} />
            <div>
              <h3 className="text-2xl font-serif italic mb-2">Top Rated</h3>
              <p className="text-white/60 text-sm mb-6">The highest rated films by critics and audiences alike.</p>
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-brand-bg bg-white/10 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?u=${i}`} alt="user" />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-brand-bg bg-brand-accent flex items-center justify-center text-[10px] font-bold">
                  +2k
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {!hasMore && trending.length >= 200 && (
        <div className="text-center mt-20 text-white/40 font-serif italic">
          Limit of 200 trending movies reached.
        </div>
      )}
    </div>
  );
};
