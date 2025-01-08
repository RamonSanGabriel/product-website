import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
// import MovieDetailsPage from '../pages/MovieDetailsPage/MovieDetailsPage';
// import NavBar from './components/NavBar/NavBar';
// import Header from './components/Header/Header';
// import Information from './components/Information/Information';
// import Footer from './components/Footer/Footer';
// import Product from './components/Product/Product';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MoviePage = lazy(() => import('../pages/MoviePage/MoviePage'));
const ProductDetailsPage = lazy(() =>
  import('../pages/ProductDetailsPage/ProductDetailsPage')
);

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />} />
        <Route index element={<HomePage />} />
        <Route path="products" element={<MoviePage />} />
        <Route path="products/:productsId" element={<ProductDetailsPage />} />
        {/* <Route path="footer" element={<Footer />} /> */}
      </Routes>
      {/*  <Header />
      <NavBar />
      <Product />
      <Information />
      <Footer /> */}
    </>
  );
};

export default App;
