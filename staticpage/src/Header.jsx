import { useState, useEffect } from 'react';
import Content from './Content';
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

  return (
    <div>
      <Content onAddMoodEntry={addMoodEntry} />
      <MoodHistory moodEntries={moodEntries} />
    </div>
  );
};

export default MoodTracker;
