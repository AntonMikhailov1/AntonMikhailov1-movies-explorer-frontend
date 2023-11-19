import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__description">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__container">
        <p className="footer__year">© 2023</p>
        <div className="footer__link-container">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://practicum.yandex.ru"
            className="footer__link link-hover"
          >
            Яндекс.Практикум
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com"
            className="footer__link link-hover"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
