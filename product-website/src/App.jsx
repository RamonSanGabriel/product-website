import { lazy } from 'react';
import './App.css';
// import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import Information from './components/Information/Information';
import Footer from './components/Footer/Footer';
import Product from './components/Product/Product';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';

const HomePage = lazy(() => import('.././src/pages/HomePage.jsx/HomePage'));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />} />
        <Route path="navbar" element={<HomePage />} />
        <Route path="product" element={<Product />} />
        <Route path="information" element={<Information />} />
        <Route path="footer" element={<Footer />} />
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
