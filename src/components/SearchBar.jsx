import React from "react";

function SearchBar() {
  return (
    <form className="search-bar">
      <input
        type="text"
        placeholder="Search me.........................."
        aria-label="Search"
      />
      <button type="submit" aria-label="Voice search">
        <span role="img" aria-label="microphone">🎤</span>
      </button>
    </form>
  );
}

export default SearchBar; 