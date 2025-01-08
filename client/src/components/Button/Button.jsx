import PropTypes from 'prop-types';
import css from './Button.module.css';

const Button = ({ text }) => {
  return (
    <button className={css.button} type="button">
      {text}
    </button>
  );
};
Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
