import css from './CustomerService.module.css';

const CustomerService = () => {
  return (
    <div>
      <h6>Customer Service</h6>
      <ul>
        <li className={css.customerService}>
          <span>
            &nbsp; <p>Help centre</p>
          </span>
        </li>
        <li className={css.customerService}>
          <span>
            &nbsp; <p>Return & Refund</p>
          </span>
        </li>
        <li className={css.customerService}>
          <span>
            &nbsp; <p>Contact Us</p>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default CustomerService;
