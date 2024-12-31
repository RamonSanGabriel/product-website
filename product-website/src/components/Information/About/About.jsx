import css from './About.module.css';

const About = () => {
  return (
    <div>
      <h6>About us</h6>
      <ul>
        <li className={css.aboutUs}>
          <span>
            <p>Who we are</p>
          </span>
        </li>
        <li className={css.aboutUs}>
          <span>
            <p>Policies</p>
          </span>
        </li>
        <li className={css.aboutUs}>
          <span>
            <p>Privacy & Policy</p>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default About;
