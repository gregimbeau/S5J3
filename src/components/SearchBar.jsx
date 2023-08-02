import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    onSearch(searchValue);
    setSearchValue("");
  };

  return (
    <form onSubmit={handleSearchSubmit}>
      <input
        type='text'
        value={searchValue}
        onChange={handleSearchChange}
        placeholder='Search for a city...'
      />
      <button type='submit'>Search</button>
    </form>
  );
};

export default SearchBar;
