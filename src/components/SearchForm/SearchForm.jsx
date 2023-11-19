import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox.jsx';

const SearchForm = () => {
  return (
    <section className="search">
      <div className="search__form-container">
        <form className="search__form">
          <div className="search__search-container">
            <div className="search__search-icon"></div>
            <input className="search__search-input input-focus" placeholder="Фильм" required></input>
            <button className="search__search-button button-hover" type="submit">
              Найти
            </button>
            {/* <span className='search__search-error'>'Нужно ввести ключевое слово'</span> */}
          </div>
          <FilterCheckbox />
        </form>
      </div>
    </section>
  );
};

export default SearchForm;
