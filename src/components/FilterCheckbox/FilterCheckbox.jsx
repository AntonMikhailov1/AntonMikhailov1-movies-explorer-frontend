import './FilterCheckbox.css';

const FilterCheckbox = () => {
  return (
    <label className="filter-checkbox">
      <input
        className="filter-checkbox__button"
        type="checkbox"
      />
      <span className="filter-checkbox__tumbler"></span>
      <span className="filter-checkbox__text">Короткометражки</span>
    </label>
  );
}

export default FilterCheckbox;