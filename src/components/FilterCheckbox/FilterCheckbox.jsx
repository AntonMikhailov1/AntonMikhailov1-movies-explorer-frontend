import './FilterCheckbox.css';

const FilterCheckbox = ({ onFilterChange, isFilterOn, isSearching }) => {
  return (
    <label className="filter-checkbox">
      <input
        className="filter-checkbox__button"
        name="filter"
        type="checkbox"
        disabled={isSearching ? true : false}
        checked={isFilterOn}
        onChange={(evt) => onFilterChange(evt.target.checked)}
      />
      <span className="filter-checkbox__tumbler"></span>
      <span className="filter-checkbox__text">Короткометражки</span>
    </label>
  );
}

export default FilterCheckbox;