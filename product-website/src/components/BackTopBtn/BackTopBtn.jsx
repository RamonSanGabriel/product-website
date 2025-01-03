import { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { BsChevronDoubleUp } from 'react-icons/bs';
import styles from './BackTopBtn.module.css';

export const BackTopBtn = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    show && (
      <button onClick={scrollToTop} className={`${styles.button} ${styles.md}`}>
        <BsChevronDoubleUp className={`${styles.icon} ${styles.md}`} />
      </button>
    )
  );
};
