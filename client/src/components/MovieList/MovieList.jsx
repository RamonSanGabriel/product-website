import PropTypes from 'prop-types';
import css from './MovieList.module.css';
import MovieListItem from './MovieListItem/MovieListItem';

const MovieList = ({ products }) => {
  return (
    <ul className={css.movieList}>
      {products.map(({ id, title }) => (
        <MovieListItem key={id} id={id} title={title} />
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default MovieList;
