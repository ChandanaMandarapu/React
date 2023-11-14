import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://api.lyricapi.com/lyrics?search=${searchTerm}`);
      const lyrics = response.data.lyrics; 
      onSearch(lyrics);
    } catch (error) {
      console.error('Error fetching lyrics:', error);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter song or artist"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
