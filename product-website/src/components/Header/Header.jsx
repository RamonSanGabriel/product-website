import css from './Header.module.css';

const Header = () => {
  return (
    <div className={css.headerContainer}>
      <img className={css.headerLogo} src="/cheekyChickShop.jpg" />
      <h2>CheekyChickShop</h2>
    </div>
  );
};

export default Header;
