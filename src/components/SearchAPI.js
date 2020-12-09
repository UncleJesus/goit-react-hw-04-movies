import axios from "axios";

const axiosFilms = (query) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=307a3a6727b61e9c7d90851fae347f85&query=${query}`
    )
    .then((response) => response.data.results);
};

const axiosTrendingFilms = () => {
  return axios
    .get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=307a3a6727b61e9c7d90851fae347f85`
    )
    .then((response) => response.data.results);
};

const axiosMovieDetails = (movieId) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=307a3a6727b61e9c7d90851fae347f85&language=en-US`
    )
    .then((response) => response.data);
};

const axiosCast = (movieId) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=307a3a6727b61e9c7d90851fae347f85`
    )
    .then((response) => response.data);
};

const axiosReviews = (movieId) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=307a3a6727b61e9c7d90851fae347f85&language=en-US&page=1`
    )
    .then((response) => response.data);
};

export default {
  axiosFilms,
  axiosTrendingFilms,
  axiosMovieDetails,
  axiosCast,
  axiosReviews,
};
