import { useEffect, useState } from 'react';
import { Loader } from '../../components/Loader/Loader';
import { fetchTrendingProducts } from '../../../../server/services/products-api';
import MovieList from '../../components/MovieList/MovieList';
import axios from 'axios';

const HomePage = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);

  const fetchAPI = async () => {
    const response = await axios.get('http://localhost:8080/contacts');
    const products = await fetchTrendingProducts();
    setTrendingProducts(products);
  };
  useEffect(() => {
    (async () => {
      try {
        await fetchAPI();
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div>
      <h2>Trending Movies</h2>
      {trendingProducts.length === 0 ? (
        <Loader />
      ) : (
        <div>
          <MovieList products={trendingProducts} />
        </div>
      )}
    </div>
  );
};

export default HomePage;
