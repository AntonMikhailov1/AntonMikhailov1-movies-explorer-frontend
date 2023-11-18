import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';
import SearchForm from '../SearchForm/SearchForm.jsx';

const Movies = () => {
  return (
    <section className="movies">
      <SearchForm />
      <MoviesCardList />
      <button type='button' className='movies__more-button button-hover'>Ещё</button>
    </section>
  );
};

export default Movies;
