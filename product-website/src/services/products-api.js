import axios from 'axios';

const API_KEY = 'a54b4a4bf1ba27497510cfbdb34a50db';

// axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.baseURL = 'https://fakestoreapi.com/';
axios.defaults.params = {
  api_key: API_KEY,
};

// REFERENCE: https://developer.themoviedb.org/reference/trending-movies
export const fetchTrendingMovies = async () => {
  const response = await axios.get(`products`);
  return response.data;
};
export const fetchMovieQuery = async (movieName) => {
  const response = await axios.get(`products?query=${movieName}`);
  return response.data;
};
export const fetchMovieDetails = async (productsId) => {
  const response = await axios.get(`products/${productsId}`);
  return response.data;
};
export const fetchMovieCast = async (productsId) => {
  /*  const response = await axios.get(`/products/${productsId}/credits`);
  return response.data.id; */
};
export const fetchMovieReviews = async (movieId) => {
  // const response = await axios.get(`movie/${movieId}/reviews?`);
  // return response.data.results;
};
/* export const fetchTrendingMovies = async () => {
  const response = await axios.get(`trending/movie/day`);
  return response.data.results;
};
export const fetchMovieQuery = async (movieName) => {
  const response = await axios.get(`search/movie?query=${movieName}`);
  return response.data.results;
};
export const fetchMovieDetails = async (movieId) => {
  const response = await axios.get(`movie/${movieId}`);
  return response.data;
};
export const fetchMovieCast = async (movieId) => {
  const response = await axios.get(`movie/${movieId}/credits?`);
  return response.data.cast;
};
export const fetchMovieReviews = async (movieId) => {
  const response = await axios.get(`movie/${movieId}/reviews?`);
  return response.data.results;
}; */
