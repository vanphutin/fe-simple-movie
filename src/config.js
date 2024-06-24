export const fetcher = (url) => fetch(url).then((r) => r.json());
export const API_KEY = "api_key=5870f3c945af319893fa3a4452cc3991";
const tmdbEndpoint = "https://api.themoviedb.org/3/movie";
export const tmdbAPI = {
  getMovieList: (type) => `${tmdbEndpoint}/${type}?${API_KEY}`,
  getMovieDetails: (movieId) => `${tmdbEndpoint}/${movieId}?${API_KEY}`,
  getMovieMeta: (movieId, type) =>
    `${tmdbEndpoint}/${movieId}/${type}?${API_KEY}`,
  imageOriginal: (url) => `http://image.tmdb.org/t/p/w500/${url}`,
};
