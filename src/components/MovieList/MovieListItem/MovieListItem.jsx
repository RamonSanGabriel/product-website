import { useLocation, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './MovieListItem.module.css';

const MovieListItem = ({ id, title }) => {
  const location = useLocation();

  return (
    <li className={css.movieListItem}>
      <Link
        className={css.link}
        to={`products/${id}`}
        state={{ from: location }}
      >
        {title}
      </Link>
    </li>
  );
};

MovieListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default MovieListItem;
