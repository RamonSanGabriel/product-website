import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import Information from './components/Information/Information';
import Footer from './components/Footer/Footer';
import Product from './components/Product/Product';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <NavBar />
      <Product />
      <Information />
      <Footer />
    </>
  );
}

export default App;
