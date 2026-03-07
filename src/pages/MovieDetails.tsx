import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { tmdbService, getImageUrl } from '../services/tmdb';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Clock, Calendar, ArrowLeft, Play, Bookmark, BookmarkCheck, Share2, X, ExternalLink } from 'lucide-react';
import { useWatchlist } from '../context/WatchlistContext';

export const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [showTrailer, setShowTrailer] = useState(false);
  const { addToWatchlist, removeFromWatchlist, isInWatchlist } = useWatchlist();

  useEffect(() => {
    const fetchDetails = async () => {
      if (!id) return;
      try {
        const data = await tmdbService.getMovieDetails(parseInt(id));
        setMovie(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchDetails();
  }, [id]);

  if (loading) return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-brand-accent border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  if (!movie) return <div>Movie not found</div>;

  const isBookmarked = isInWatchlist(movie.id);
  const trailer = movie.videos?.results?.find((v: any) => v.type === 'Trailer' && v.site === 'YouTube');
  
  // Get watch providers (streaming, rent, or buy)
  const watchData = movie['watch/providers']?.results;
  const regionData = watchData?.IN || watchData?.US || Object.values(watchData || {})[0] as any;
  const providers = regionData?.flatrate || regionData?.rent || regionData?.buy || [];
  const watchLink = regionData?.link;

  const handleWatchlist = () => {
    if (isBookmarked) {
      removeFromWatchlist(movie.id);
    } else {
      addToWatchlist(movie);
    }
  };

  const handleShare = async () => {
    const shareData = {
      title: movie.title,
      text: movie.overview,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      }
    } catch (err) {
      console.error('Error sharing:', err);
    }
  };

  return (
    <div className="relative min-h-screen bg-brand-bg">
      {/* Backdrop */}
      <div className="fixed inset-0 z-0">
        <img 
          src={getImageUrl(movie.backdrop_path, 'original')} 
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/40 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 pt-32 px-8 md:px-20 pb-20">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Poster */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-4"
          >
            <div className="aspect-[2/3] rounded-3xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10">
              <img 
                src={getImageUrl(movie.poster_path, 'original')} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          {/* Info */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center gap-1 bg-yellow-400/10 text-yellow-400 px-3 py-1 rounded-full font-bold text-sm border border-yellow-400/20">
                  <Star size={14} fill="currentColor" />
                  {movie.vote_average.toFixed(1)}
                </div>
                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <Clock size={14} />
                  {movie.runtime} min
                </div>
                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <Calendar size={14} />
                  {new Date(movie.release_date).getFullYear()}
                </div>
                <div className="px-3 py-1 bg-white/5 rounded-full text-xs font-bold uppercase tracking-wider border border-white/10">
                  {movie.status}
                </div>
              </div>

              <h1 className="text-5xl md:text-7xl font-serif italic mb-8 tracking-tighter leading-none">
                {movie.title}
              </h1>

              <div className="flex flex-wrap gap-2 mb-10">
                {movie.genres.map((genre: any) => (
                  <span key={genre.id} className="glass px-4 py-1.5 rounded-full text-xs font-medium text-white/80">
                    {genre.name}
                  </span>
                ))}
              </div>

              {movie.tagline && (
                <p className="text-xl text-white/70 leading-relaxed mb-12 max-w-3xl font-light italic">
                  "{movie.tagline}"
                </p>
              )}

              <div className="mb-12">
                <h3 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-4">Overview</h3>
                <p className="text-lg text-white/80 leading-relaxed max-w-3xl">
                  {movie.overview}
                </p>
              </div>

              {/* OTT Availability */}
              {providers.length > 0 && (
                <div className="mb-12">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-4">Available on</h3>
                  <div className="flex flex-wrap gap-4">
                    {providers.map((provider: any) => (
                      <a 
                        key={provider.provider_id} 
                        href={watchLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group relative"
                      >
                        <img 
                          src={getImageUrl(provider.logo_path)} 
                          alt={provider.provider_name}
                          className="w-12 h-12 rounded-xl border border-white/10 group-hover:scale-110 transition-transform"
                          title={provider.provider_name}
                        />
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black/80 text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                          {provider.provider_name}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-wrap items-center gap-4">
                {trailer ? (
                  <button 
                    onClick={() => setShowTrailer(true)}
                    className="bg-brand-accent text-white px-10 py-4 rounded-full font-bold flex items-center gap-2 hover:brightness-110 transition-all transform hover:scale-105"
                  >
                    <Play size={20} fill="currentColor" />
                    Watch Trailer
                  </button>
                ) : (
                  <button 
                    disabled
                    className="bg-white/10 text-white/40 px-10 py-4 rounded-full font-bold flex items-center gap-2 cursor-not-allowed"
                  >
                    <Play size={20} />
                    No Trailer Available
                  </button>
                )}
                <button 
                  onClick={handleWatchlist}
                  className={`p-4 rounded-full transition-all transform hover:scale-105 ${isBookmarked ? 'bg-brand-accent text-white' : 'glass hover:bg-white/10'}`}
                >
                  {isBookmarked ? <BookmarkCheck size={20} /> : <Bookmark size={20} />}
                </button>
                <button 
                  onClick={handleShare}
                  className="glass p-4 rounded-full hover:bg-white/10 transition-all transform hover:scale-105"
                >
                  <Share2 size={20} />
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Cast Section */}
        <section className="mt-32">
          <h3 className="text-2xl font-serif italic mb-10">Top Cast</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {movie.credits.cast.slice(0, 6).map((person: any) => (
              <div key={person.id} className="group">
                <div className="aspect-square rounded-2xl overflow-hidden mb-4 bg-white/5 border border-white/10">
                  <img 
                    src={getImageUrl(person.profile_path)} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="font-bold text-sm mb-1">{person.name}</h4>
                <p className="text-xs text-white/40">{person.character}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Trailer Modal */}
      <AnimatePresence>
        {showTrailer && trailer && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-20"
          >
            <button 
              onClick={() => setShowTrailer(false)}
              className="absolute top-8 right-8 text-white/60 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
            >
              <X size={32} />
            </button>
            <div className="w-full max-w-6xl aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <iframe
                src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1`}
                title="Movie Trailer"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
