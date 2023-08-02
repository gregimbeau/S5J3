import React from "react";
import SearchBar from "./SearchBar";

const Navbar = ({ onSearch }) => {
  return (
    <nav>
      <h1>Mon Application Météo</h1>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
};

export default Navbar;
