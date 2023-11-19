import './Portfolio.css';

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__list">
        <li className="portfolio__list-item">
          <a
            rel="noreferrer"
            target="_blank"
            className="portfolio__link link-hover"
            href="https://github.com/AntonMikhailov1/how-to-learn"
          >
            Статичный сайт
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            className="portfolio__link-icon link-hover"
            href="https://github.com/AntonMikhailov1/how-to-learn"
          >
            &#8599;
          </a>
        </li>
        <li className="portfolio__list-item">
          <a
            rel="noreferrer"
            target="_blank"
            className="portfolio__link link-hover"
            href="https://github.com/AntonMikhailov1/russian-travel"
          >
            Адаптивный сайт
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            className="portfolio__link-icon link-hover"
            href="https://github.com/AntonMikhailov1/russian-travel"
          >
            &#8599;
          </a>
        </li>
        <li className="portfolio__list-item">
          <a
            rel="noreferrer"
            target="_blank"
            className="portfolio__link link-hover"
            href="https://github.com/AntonMikhailov1/react-mesto-api-full-gha"
          >
            Одностраничное приложение
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            className="portfolio__link-icon link-hover"
            href="https://github.com/AntonMikhailov1/react-mesto-api-full-gha"
          >
            &#8599;
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Portfolio;
