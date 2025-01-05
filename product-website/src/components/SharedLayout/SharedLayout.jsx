import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Loader } from '../Loader/Loader';
import { BackTopBtn } from '../BackTopBtn/BackTopBtn';
import css from './SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <>
      <div className={css.container}>
        <Header />
        <Suspense fallback={<Loader />}>
          <Outlet />
          <BackTopBtn />
        </Suspense>
        <Footer />
      </div>
    </>
  );
};

export default SharedLayout;
