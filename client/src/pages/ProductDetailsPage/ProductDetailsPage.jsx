import { useEffect, useState, Suspense } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import Button from '../../components/Button/Button';
import { Loader } from '../../components/Loader/Loader';
import { fetchProductDetails } from '../../services/products-api';
import css from './ProductDetailsPage.module.css';

const MovieDetailsPage = () => {
  const { productsId } = useParams();
  const [productDetails, setProductDetails] = useState();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    (async () => {
      try {
        const products = await fetchProductDetails(productsId);
        setProductDetails(products);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [productsId]);

  if (!productDetails) {
    return <Loader />;
  }

  return (
    <>
      <Link to={backLinkHref}>
        <Button text="⬅ Go back" />
      </Link>
      <div className={css.productDetailsContainer}>
        <img
          className={css.image}
          src={
            productDetails.image
              ? `https://fakestoreapi.com/img${productDetails.image}`
              : `https://fakeimg.pl/600x400?text=No+Image+Available`
          }
          alt={productDetails.title}
        />
        <div className={css.productDetailsWrap}>
          {productDetails ? (
            <>
              <h1 className={css.productTitle}>{productDetails.title}</h1>
              <h4 className={css.userScore} aria-label="Product Price">
                Price:{productDetails.price}
              </h4>
              <h2>Overview</h2>
              <p>{productDetails.overview}</p>
              <h2>Description</h2>
              <p>{productDetails.description}</p>
            </>
          ) : (
            <p>
              <Loader />
            </p>
          )}
        </div>
      </div>
      <hr />
      <h3 className={css.additionalInfo}>Additional information</h3>
      {/*  <Link to="cast">
        <Button text="Cast" />
        </Link>
        <Link to="reviews">
        <Button text="Reviews" />
        </Link> */}
      <hr />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetailsPage;
