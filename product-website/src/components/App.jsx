import { lazy } from 'react';

import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
// import NavBar from './components/NavBar/NavBar';
// import Header from './components/Header/Header';
// import Information from './components/Information/Information';
// import Footer from './components/Footer/Footer';
// import Product from './components/Product/Product';

const HomePage = lazy(() => import('../pages/HomePage.jsx/HomePage'));
const MoviePage = lazy(() => import('../pages/MoviePage/MoviePage'));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />} />
        {/* <Route index element={<HomePage />} /> */}
        {/* <Route path="movies" element={<MoviePage />} /> */}
        {/* <Route path="information" element={<Information />} /> */}
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
