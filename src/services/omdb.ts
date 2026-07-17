import axios from 'axios';
import { movieDatabase } from './movieDatabase';

const OMDB_API_KEY = (import.meta as any).env.VITE_OMDB_API_KEY;

export const getImageUrl = (path: string | null, size: 'w92' | 'w500' | 'original' = 'w500') => {
  if (!path) return 'https://picsum.photos/seed/movie/500/750';
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  return path;
};

export interface Movie {
  id: string;
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  vote_average: number;
  genre_ids?: number[];
}

export interface Genre {
  id: number;
  name: string;
}

export const omdbService = {
  getTrending: async (page = 1) => {
    const pageSize = 20;
    const startIndex = (page - 1) * pageSize;
    const results = movieDatabase.slice(startIndex, startIndex + pageSize);
    return {
      results,
      page,
      total_pages: Math.ceil(movieDatabase.length / pageSize)
    };
  },
  searchMovies: async (query: string, page = 1) => {
    try {
      const response = await axios.get(`https://www.omdbapi.com/`, {
        params: { apikey: OMDB_API_KEY, s: query, page }
      });
      if (response.data.Response === 'True') {
        const detailedPromises = response.data.Search.slice(0, 10).map(async (item: any) => {
          try {
            const detailRes = await axios.get(`https://www.omdbapi.com/`, {
              params: { apikey: OMDB_API_KEY, i: item.imdbID }
            });
            const d = detailRes.data;
            const genres = d.Genre ? d.Genre.split(', ').map((g: string) => g.trim()) : [];
            const rating = d.imdbRating && d.imdbRating !== 'N/A' ? parseFloat(d.imdbRating) : 0;
            return {
              id: d.imdbID,
              title: d.Title,
              overview: d.Plot !== 'N/A' ? d.Plot : '',
              poster_path: d.Poster !== 'N/A' ? d.Poster : null,
              backdrop_path: d.Poster !== 'N/A' ? d.Poster : null,
              release_date: d.Released !== 'N/A' ? d.Released : d.Year,
              vote_average: rating,
              genres
            };
          } catch (e) {
            return {
              id: item.imdbID,
              title: item.Title,
              overview: '',
              poster_path: item.Poster !== 'N/A' ? item.Poster : null,
              backdrop_path: item.Poster !== 'N/A' ? item.Poster : null,
              release_date: item.Year,
              vote_average: 0,
              genres: []
            };
          }
        });
        const results = await Promise.all(detailedPromises);
        return {
          results,
          page,
          total_pages: Math.ceil(parseInt(response.data.totalResults) / 10)
        };
      }
    } catch (error) {
      console.error('Error searching movies:', error);
    }
    return { results: [], page, total_pages: 0 };
  },
  getMovieDetails: async (id: string) => {
    const response = await axios.get(`https://www.omdbapi.com/`, {
      params: { apikey: OMDB_API_KEY, i: id, plot: 'full' }
    });
    const d = response.data;
    if (d.Response === 'False') {
      throw new Error(d.Error || 'Movie not found');
    }

    const genres = d.Genre && d.Genre !== 'N/A'
      ? d.Genre.split(', ').map((g: string, i: number) => ({ id: i, name: g }))
      : [];

    const runtime = d.Runtime && d.Runtime !== 'N/A' ? parseInt(d.Runtime) : 0;
    const rating = d.imdbRating && d.imdbRating !== 'N/A' ? parseFloat(d.imdbRating) : 0;

    const cast = d.Actors && d.Actors !== 'N/A'
      ? d.Actors.split(', ').map((actor: string, i: number) => ({
          id: i,
          name: actor,
          character: 'Cast',
          profile_path: `https://ui-avatars.com/api/?name=${encodeURIComponent(actor)}&background=0D0D0C&color=fff&bold=true&size=128`
        }))
      : [];

    return {
      id: d.imdbID,
      title: d.Title,
      overview: d.Plot !== 'N/A' ? d.Plot : '',
      poster_path: d.Poster !== 'N/A' ? d.Poster : null,
      backdrop_path: d.Poster !== 'N/A' ? d.Poster : null,
      release_date: d.Released !== 'N/A' ? d.Released : d.Year,
      vote_average: rating,
      runtime: runtime,
      status: 'Released',
      tagline: d.Awards && d.Awards !== 'N/A' ? d.Awards : '',
      genres: genres,
      credits: {
        cast: cast
      },
      videos: {
        results: [
          {
            type: 'Trailer',
            site: 'YouTube',
            key: `?listType=search&list=${encodeURIComponent(d.Title + ' trailer')}`
          }
        ]
      },
      'watch/providers': {
        results: {
          US: {
            flatrate: [
              {
                provider_id: 8,
                provider_name: 'Netflix',
                logo_path: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Netflix-new-icon.png'
              },
              {
                provider_id: 119,
                provider_name: 'Amazon Prime Video',
                logo_path: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg'
              }
            ],
            link: `https://www.justwatch.com/us/search?q=${encodeURIComponent(d.Title)}`
          }
        }
      }
    };
  },
  getGenres: async (): Promise<Genre[]> => {
    return [
      { id: 1, name: "Action" },
      { id: 2, name: "Adventure" },
      { id: 3, name: "Animation" },
      { id: 4, name: "Comedy" },
      { id: 5, name: "Crime" },
      { id: 6, name: "Drama" },
      { id: 7, name: "Fantasy" },
      { id: 8, name: "Horror" },
      { id: 9, name: "Mystery" },
      { id: 10, name: "Romance" },
      { id: 11, name: "Sci-Fi" },
      { id: 12, name: "Thriller" }
    ];
  },
  discoverMovies: async (params: { with_genres?: string; 'vote_average.gte'?: number; page?: number }) => {
    let filtered = [...movieDatabase];
    if (params.with_genres) {
      const genreId = parseInt(params.with_genres);
      const genresList = [
        { id: 1, name: "Action" },
        { id: 2, name: "Adventure" },
        { id: 3, name: "Animation" },
        { id: 4, name: "Comedy" },
        { id: 5, name: "Crime" },
        { id: 6, name: "Drama" },
        { id: 7, name: "Fantasy" },
        { id: 8, name: "Horror" },
        { id: 9, name: "Mystery" },
        { id: 10, name: "Romance" },
        { id: 11, name: "Sci-Fi" },
        { id: 12, name: "Thriller" }
      ];
      const genreObj = genresList.find(g => g.id === genreId);
      if (genreObj) {
        filtered = filtered.filter(m => 
          m.genres.some(g => g.toLowerCase().includes(genreObj.name.toLowerCase()))
        );
      }
    }
    if (params['vote_average.gte']) {
      filtered = filtered.filter(m => m.vote_average >= params['vote_average.gte']!);
    }
    const page = params.page || 1;
    const pageSize = 20;
    const startIndex = (page - 1) * pageSize;
    const results = filtered.slice(startIndex, startIndex + pageSize);
    return {
      results,
      page,
      total_pages: Math.ceil(filtered.length / pageSize)
    };
  },
  getTopRated: async (page = 1) => {
    const sorted = [...movieDatabase].sort((a, b) => b.vote_average - a.vote_average);
    const pageSize = 20;
    const startIndex = (page - 1) * pageSize;
    const results = sorted.slice(startIndex, startIndex + pageSize);
    return {
      results,
      page,
      total_pages: Math.ceil(sorted.length / pageSize)
    };
  },
  getWatchProviders: async (id: string) => {
    const movie = movieDatabase.find(m => m.id === id);
    const title = movie ? movie.title : 'Movie';
    return {
      US: {
        flatrate: [
          {
            provider_id: 8,
            provider_name: 'Netflix',
            logo_path: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Netflix-new-icon.png'
          },
          {
            provider_id: 119,
            provider_name: 'Amazon Prime Video',
            logo_path: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg'
          }
        ],
        link: `https://www.justwatch.com/us/search?q=${encodeURIComponent(title)}`
      }
    };
  }
};
