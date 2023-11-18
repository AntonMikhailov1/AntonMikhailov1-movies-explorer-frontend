import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox.jsx';

const SearchForm = () => {
  return (
    <section className='search'>
      <form className='search__form' >
        <div className='search__search-container'>
          <div className='search__search-icon'></div>
          <input
            className='search__search-input'
            placeholder='Фильм'
          ></input>
          <button className='search__search-button' type='submit'>Найти</button>
          {/* <span className='search__search-error'>'Нужно ввести ключевое слово'</span> */}
        </div>
        <FilterCheckbox />
      </form>
    </section>
  )
}

export default SearchForm;
