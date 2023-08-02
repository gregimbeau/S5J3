import React, { useState, useEffect, useRef } from "react"; // import useRef
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState("");
  const [autocompleteResults, setAutocompleteResults] = useState([]);
  const navigate = useNavigate();

  const dropdownRef = useRef(null); // ref for the dropdown

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    onSearch(searchValue);
    navigate(`/city/${searchValue}`);
  };

  const handleCityClick = (cityName) => {
    onSearch(cityName);
    setSearchValue(cityName);
    setAutocompleteResults([]);
    navigate(`/city/${cityName}`);
  };

  useEffect(() => {
    // Function to hide dropdown if clicked outside
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setAutocompleteResults([]); // clear the results if clicked outside of the dropdown
      }
    };

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  useEffect(() => {
    if (searchValue.length >= 3) {
      axios
        .get(
          `http://api.geonames.org/searchJSON?name_startsWith=${searchValue}&maxRows=10&username=gregimbeau`
        )
        .then((response) => {
          setAutocompleteResults(response.data.geonames);
        })
        .catch((error) => {
          console.log("Error: ", error);
        });
    } else {
      setAutocompleteResults([]);
    }
  }, [searchValue]);

  return (
    <div className='search-bar'>
      <form onSubmit={handleSearchSubmit}>
        <input
          type='text'
          value={searchValue}
          onChange={handleSearchChange}
          placeholder='Search for a city...'
        />
        <button type='submit'>Search</button>
      </form>
      {autocompleteResults.length > 0 && (
        <div className='dropdown-menu' ref={dropdownRef}>
          <ul>
            {autocompleteResults.map((result) => (
              <li
                key={result.geonameId}
                onClick={() => handleCityClick(result.name)}>
                {result.name}, {result.adminName1}, {result.countryName}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
