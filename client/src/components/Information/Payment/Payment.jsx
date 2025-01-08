import css from './Payment.module.css';
import bdo from '../../../images/bdoLogo.png';
import bpi from '../../../images/bpi.png';
import gcash from '../../../images/gcashLogo.png';

const Payment = () => {
  return (
    <div>
      <h6>Payment</h6>
      <ul>
        <li className={css.socialMedia}>
          <span>
            <img className={css.paymentLogo} src={bdo} alt="BDO Logo" />
          </span>
        </li>
        <li className={css.socialMedia}>
          <span>
            <img className={css.paymentLogo} src={bpi} alt="BPI Logo" />
          </span>
        </li>
        <li className={css.socialMedia}>
          <span>
            <img
              className={css.paymentLogoGcash}
              src={gcash}
              alt="Gcash Logo"
            />
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Payment;
