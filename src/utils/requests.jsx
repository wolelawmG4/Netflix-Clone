const API_KEY = import.meta.env.VITE_API_KEY;

const request = {
  fetchTrending: `/trnding/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movies?api_key=${API_KEY}&with_gehres=28`,
  fetchComedyMovies: `/discover/movies?api_key=${API_KEY}&with_gehres=35`,
  fetchHorrorMovies: `/discover/movies?api_key=${API_KEY}&with_gehres=27`,
  fetchRomanceMovies: `/discover/movies?api_key=${API_KEY}&with_gehres=10749`,
  fetchDocumentaries: `/discover/movies?api_key=${API_KEY}&with_gehres=99`,
  fetchTvShow: `/Tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
};
export default request;
