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
          <a href="https://practicum.yandex.ru" className="footer__link">
            Яндекс.Практикум
          </a>
          <a href="https://github.com/AntonMikhailov1" className="footer__link">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
