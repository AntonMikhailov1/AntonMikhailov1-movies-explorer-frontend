import './AboutProject.css';

const AboutProject = () => {
  return (
    <section className="about-project" id="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <article className="about-project__container">
        <article className="about-project__article">
          <h3 className="about-project__article-title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__article-text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </article>
        <article className="about-project__article">
          <h3 className="about-project__article-title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__article-text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </article>
      </article>
      <div className="about-project__timeline">
        <span className="about-project__timeline-text about-project__timeline-text_back">
          1 неделя
        </span>
        <span className="about-project__timeline-text about-project__timeline-text_front">
          4 недели
        </span>
        <span className="about-project__timeline-text about-project__timeline-text_caption">
          Back-end
        </span>
        <span className="about-project__timeline-text about-project__timeline-text_caption">
          Front-End
        </span>
      </div>
    </section>
  );
};

export default AboutProject;
