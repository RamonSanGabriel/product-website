import { footerDetails } from '../../data/footer';
import css from './Footer.module.css';

const Footer = () => {
  const { name } = footerDetails;
  return (
    <div>
      <footer className={css.footerWrapper}>
        <p className={css.footerText}>
          &copy;
          {new Date().getFullYear()} {name}
        </p>
      </footer>
    </div>
  );
};

export default Footer;
