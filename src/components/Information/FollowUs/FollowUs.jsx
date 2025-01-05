import { FaFacebook, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';
import css from './FollowUs.module.css';

const FollowUs = () => {
  return (
    <div>
      <h6>Follow us</h6>
      <ul>
        <li className={css.socialMedia}>
          <span>
            <FaFacebook />
            &nbsp; <p>Facebook</p>
          </span>
        </li>
        <li className={css.socialMedia}>
          <span>
            <FaInstagramSquare />
            &nbsp; <p>Instagram</p>
          </span>
        </li>
        <li className={css.socialMedia}>
          <span>
            <FaTwitterSquare />
            &nbsp; <p>Twitter</p>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default FollowUs;
