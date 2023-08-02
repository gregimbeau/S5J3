import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 


const SearchBar = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState("");
  const [autocompleteResults, setAutocompleteResults] = useState([]);
  const navigate = useNavigate(); // use navigate instead of history

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    onSearch(searchValue);
    navigate(`/city/${searchValue}`); // use navigate instead of history.push
  };

  const handleCityClick = (cityName) => {
    onSearch(cityName);
    setSearchValue(cityName);
    setAutocompleteResults([]); // clear the results after selecting a city
    navigate(`/city/${cityName}`); // use navigate instead of history.push
  };

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
        <div className='dropdown-menu'>
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
