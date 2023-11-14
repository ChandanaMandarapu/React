import React, { useState } from 'react';
import SearchBar from './SearchBar';
import MoodVisualizer from './MoodVisualizer';
import LyricExplorer from './LyricExplorer';
import axios from 'axios'; 

const App = () => {
  const [mood, setMood] = useState('');
  const [lyrics, setLyrics] = useState('');

  const handleSearch = async (searchTerm) => {
    try {
      
      const response = await axios.get(`https://api.lyricapi.com/lyrics?search=${searchTerm}`);
      const lyrics = response.data.lyrics;

      
      const mood = MoodAnalyzer.analyze(lyrics);

      
      setMood(mood);
      setLyrics(lyrics);
    } catch (error) {
      console.error('Error handling search:', error);
    }
  };

  return (
    <div className="app">
      <h1>Song Mood Visualizer</h1>
      <SearchBar onSearch={handleSearch} />
      <MoodVisualizer mood={mood} />
      <LyricExplorer lyrics={lyrics} />
    </div>
  );
};

export default App;
