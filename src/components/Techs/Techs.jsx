import './Techs.css';

const Techs = () => {
  return (
    <section className="techs" id="techs">
      <h2 className="techs__title">Технологии</h2>
      <article className="techs__article">
        <h3 className="techs__article-title">7 технологий</h3>
        <p className="techs__article-text">
          На курсе веб-разработки мы освоили технологии, которые&nbsp;применили
          в дипломном&nbsp;проекте.
        </p>
      </article>
      <div className="techs__grid-container">
        <div className="techs__grid-item">HTML</div>
        <div className="techs__grid-item">CSS</div>
        <div className="techs__grid-item">JS</div>
        <div className="techs__grid-item">React</div>
        <div className="techs__grid-item">Git</div>
        <div className="techs__grid-item">Express.js</div>
        <div className="techs__grid-item">MongoDB</div>
      </div>
    </section>
  );
};

export default Techs;
