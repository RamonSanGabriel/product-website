import { useEffect, useState } from 'react';
import { Loader } from '../../components/Loader/Loader';
import { fetchTrendingMovies } from '../../services/products-api';
import MovieList from '../../components/MovieList/MovieList';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        // const movies = await fetchTrendingMovies();
        const products = await fetchTrendingMovies();
        // setTrendingMovies(movies);
        setTrendingMovies(products);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div>
      <h2>Trending Movies</h2>
      {trendingMovies.length === 0 ? (
        <Loader />
      ) : (
        // <MovieList movies={trendingMovies} />
        <MovieList products={trendingMovies} />
      )}
    </div>
  );
};

export default HomePage;
