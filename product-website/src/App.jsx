import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import Information from './components/Information/Information';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <NavBar />
      <Information />
    </>
  );
}

export default App;
