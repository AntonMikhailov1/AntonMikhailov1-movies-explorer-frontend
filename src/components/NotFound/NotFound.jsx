import './NotFound.css';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  function handleGoBack() {
      navigate(-1);
  }

  return (
    <main className="not-found">
      <div className="not-found__container">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__text">Страница не найдена</p>
      </div>
      <button className="not-found__return-link link-hover" type='button' onClick={handleGoBack}>
        Назад
      </button>
    </main>
  );
};

export default NotFound;

