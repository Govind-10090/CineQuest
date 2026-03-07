import { Search, Film, TrendingUp, Filter } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

export const Navbar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-20 glass flex items-center px-8 justify-between">
      <Link to="/" className="flex items-center gap-2 group">
        <div className="w-10 h-10 bg-brand-accent rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
          <Film className="text-white" size={24} />
        </div>
        <span className="text-2xl font-serif italic tracking-tighter">CineQuest</span>
      </Link>

      <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest font-medium text-white/60">
        <Link to="/discover" className="hover:text-brand-accent transition-colors">Discover</Link>
        <Link to="/trending" className="hover:text-brand-accent transition-colors">Trending</Link>
        <Link to="/genres" className="hover:text-brand-accent transition-colors">Genres</Link>
      </div>

      <div className="flex items-center gap-4">
        <form onSubmit={handleSearch} className="relative hidden sm:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={18} />
          <input 
            type="text" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search movies..." 
            className="bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 w-64 focus:outline-none focus:border-brand-accent/50 transition-all text-sm"
          />
        </form>
        <button className="p-2 hover:bg-white/5 rounded-full transition-colors">
          <Filter size={20} className="text-white/60" />
        </button>
      </div>
    </nav>
  );
};
