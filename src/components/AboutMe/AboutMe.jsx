import meImage from '../../images/me.jpg';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <section className="about-me" id="about-me">
      <h2 className="about-me__title">Студент</h2>
      <article className="about-me__article">
        <article className="about-me__article-container">
          <h3 className="about-me__article-title">Антон</h3>
          <p className="about-me__article-subtitle">
            Фронтенд-разработчик, 28 лет
          </p>
          <p className="about-me__article-paragraph">
            Я из Новосибирска, закончил факультет экономики СГУ. У меня есть
            жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно
            начал кодить. С 2015 года работал в компании «СКБ Контур». После
            того, как прошёл курс по веб-разработке, начал заниматься
            фриланс-заказами.
          </p>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/AntonMikhailov1"
            className="about-me__github-link link-hover"
          >
            Github
          </a>
        </article>
        <img className="about-me__image" src={meImage} alt="Фото студента" />
      </article>
    </section>
  );
};

export default AboutMe;
