import { useState, useEffect } from 'react';
import MoodEntryForm from './MoodEntryForm';
import MoodHistory from './MoodHistory';

const MoodTracker = () => {
    const [moodEntries, setMoodEntries] = useState([]);
  
    useEffect(() => {
      const storedMoodEntries = JSON.parse(localStorage.getItem('moodEntries')) || [];
      setMoodEntries(storedMoodEntries);
    }, []);
  
    const addMoodEntry = (newEntry) => {
      const updatedEntries = [...moodEntries, newEntry];
      setMoodEntries(updatedEntries);
      localStorage.setItem('moodEntries', JSON.stringify(updatedEntries));
    };
  
    const clearHistory = () => {
      setMoodEntries([]);
      localStorage.removeItem('moodEntries');
    };
  
    return (
      <div className="mood-tracker-container">
        <MoodEntryForm onAddMoodEntry={addMoodEntry} />
        <MoodHistory moodEntries={moodEntries} onClearHistory={clearHistory} />
      </div>
    );
  };
  
  export default MoodTracker;