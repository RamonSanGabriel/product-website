import css from './Payment.module.css';
import bdo from '../../../images/bdoLogo.png';
import bpi from '../../../images/bpi.png';

const Payment = () => {
  return (
    <div>
      <h6>Payment</h6>
      <ul>
        <li className={css.socialMedia}>
          <span>
            <img className={css.paymentLogo} src={bdo} alt="" />
            &nbsp; <p>Banco De Oro</p>
          </span>
        </li>
        <li className={css.socialMedia}>
          <span>
            <img className={css.paymentLogo} src={bpi} alt="" />
            &nbsp; <p>Bank of the Philippine Islands</p>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Payment;
