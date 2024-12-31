import css from './CustomerService.module.css';

const CustomerService = () => {
  return (
    <div>
      <h6>Customer Service</h6>
      <ul>
        <li className={css.customerService}>
          <span>
            <p>Help centre</p>
          </span>
        </li>
        <li className={css.customerService}>
          <span>
            <p>Return & Refund</p>
          </span>
        </li>
        <li className={css.customerService}>
          <span>
            <p>Contact Us</p>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default CustomerService;
