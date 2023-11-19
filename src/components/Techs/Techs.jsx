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
      <ul className="techs__grid-container">
        <li className="techs__grid-item">HTML</li>
        <li className="techs__grid-item">JS</li>
        <li className="techs__grid-item">CSS</li>
        <li className="techs__grid-item">React</li>
        <li className="techs__grid-item">Git</li>
        <li className="techs__grid-item">Express.js</li>
        <li className="techs__grid-item">MongoDB</li>
      </ul>
    </section>
  );
};

export default Techs;
