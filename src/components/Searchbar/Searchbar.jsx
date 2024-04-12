import PropTypes from "prop-types";
import {
  SearchbarBox,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from "./Searchbar.styled";

export const Searchbar = ({ onSubmit }) => {
  const onSearch = (evt) => {
    evt.preventDefault();

    const query = evt.target.searchQuery.value.trim();

    onSubmit(query);
    evt.target.reset();
  };

  return (
    <SearchbarBox>
      <SearchForm onSubmit={onSearch}>
        <SearchFormButton type="submit">Search</SearchFormButton>

        <SearchFormInput
          id="searchQuery"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies..."
        />
      </SearchForm>
    </SearchbarBox>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
