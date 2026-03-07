import axios from 'axios';

const TMDB_API_KEY = (import.meta as any).env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

const tmdb = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: TMDB_API_KEY,
  },
});

export const getImageUrl = (path: string | null, size: 'w92' | 'w500' | 'original' = 'w500') => {
  if (!path) return 'https://picsum.photos/seed/movie/500/750';
  return `${IMAGE_BASE_URL}/${size}${path}`;
};

export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  vote_average: number;
  genre_ids: number[];
}

export interface Genre {
  id: number;
  name: string;
}

export const tmdbService = {
  getTrending: async (page = 1) => {
    const response = await tmdb.get('/trending/movie/day', { params: { page } });
    return response.data;
  },
  searchMovies: async (query: string, page = 1) => {
    const response = await tmdb.get('/search/movie', { params: { query, page } });
    return response.data;
  },
  getMovieDetails: async (id: number) => {
    const response = await tmdb.get(`/movie/${id}`, { 
      params: { 
        append_to_response: 'videos,credits,watch/providers' 
      } 
    });
    return response.data;
  },
  getGenres: async () => {
    const response = await tmdb.get('/genre/movie/list');
    return response.data.genres;
  },
  discoverMovies: async (params: { with_genres?: string; 'vote_average.gte'?: number; page?: number }) => {
    const response = await tmdb.get('/discover/movie', { params });
    return response.data;
  },
  getTopRated: async (page = 1) => {
    const response = await tmdb.get('/movie/top_rated', { params: { page } });
    return response.data;
  },
  getWatchProviders: async (id: number) => {
    const response = await tmdb.get(`/movie/${id}/watch/providers`);
    return response.data.results;
  },
};
