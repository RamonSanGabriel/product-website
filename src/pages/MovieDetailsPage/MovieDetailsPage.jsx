import { useEffect, useState, Suspense } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import Button from '../../components/Button/Button';
import { Loader } from '../../components/Loader/Loader';
// import { fetchMovieDetails } from 'services/themoviedb-api';
import { fetchMovieDetails } from '../../services/products-api';
import css from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  // const { movieId } = useParams();
  const { productsId } = useParams();
  const [movieDetails, setMovieDetails] = useState();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    (async () => {
      try {
        // const movie = await fetchMovieDetails(movieId);
        const products = await fetchMovieDetails(productsId);
        // setMovieDetails(movie);
        setMovieDetails(products);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [productsId]);

  if (!movieDetails) {
    return <Loader />;
  }

  return (
    <>
      <Link to={backLinkHref}>
        <Button text="⬅ Go back" />
      </Link>

      <div className={css.movieDetailsContainer}>
        <img
          className={css.image}
          src={
            movieDetails.poster_path
              ? `https://fakestoreapi.com/img${movieDetails.poster_path}`
              : `https://fakeimg.pl/600x400?text=No+Image+Available`
          }
          alt={movieDetails.title}
        />
        {/*   <div className={css.movieDetailsWrap}>
          <h1 className={css.movieTitle}>{movieDetails.title}</h1>
          <h4 className={css.userScore}>
            User score: {Math.round(movieDetails.vote_average * 10)}%
          </h4>
          <h2>Overview</h2>
          <p>{movieDetails.overview}</p>
          <h2>Genres</h2>
          <p>
            {movieDetails.genres.map((genre) => (
              <span key={genre.id}> {genre.name}</span>
            ))}
          </p>
        </div> */}
      </div>

      <hr />
      <h3 className={css.additionalInfo}>Additional information</h3>

      <Link to="cast">
        <Button text="Cast" />
      </Link>
      <Link to="reviews">
        <Button text="Reviews" />
      </Link>
      <hr />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetailsPage;
