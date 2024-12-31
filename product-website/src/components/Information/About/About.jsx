import css from './About.module.css';

const About = () => {
  return (
    <div>
      <h6>About us</h6>
      <ul>
        <li className={css.aboutUs}>
          <span>
            &nbsp; <p>Who we are</p>
          </span>
        </li>
        <li className={css.aboutUs}>
          <span>
            &nbsp; <p>Instagram</p>
          </span>
        </li>
        <li className={css.aboutUs}>
          <span>
            &nbsp; <p>Twitter</p>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default About;
