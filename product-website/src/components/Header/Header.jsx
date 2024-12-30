import css from './Header.module.css';
import logo from '../../images/cheekyChickShop.jpg';

const Header = () => {
  return (
    <div className={css.headerContainer}>
      <img className={css.headerLogo} src={logo} alt="Cheeky Chick Shop Logo" />
      <h2>
        <b>C</b>
        heeky
        <b>C</b>
        hick
        <b>S</b>
        hop
      </h2>
    </div>
  );
};

export default Header;
