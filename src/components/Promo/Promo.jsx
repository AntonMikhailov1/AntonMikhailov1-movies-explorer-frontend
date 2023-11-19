import './Promo.css';

const Promo = () => {
  return (
    <section className="promo">
      <h1 className="promo__title">
        Учебный&nbsp;проект студента факультета Веб-разработки.
      </h1>
      <ul className="promo__navtab">
      <li>
        <a className="promo__navtab-link link-hover" href="#about-project">
          О проекте
        </a>
      </li>
      <li>
        <a className="promo__navtab-link link-hover" href="#techs">
          Технологии
        </a>
      </li>
      <li>
        <a className="promo__navtab-link link-hover" href="#about-me">
          Студент
        </a>
      </li>
    </ul>
    </section>
  );
};

export default Promo;
