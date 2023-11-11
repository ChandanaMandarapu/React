import { useState } from 'react';

const MoodEntryForm = ({ onAddMoodEntry }) => {
  const [selectedMood, setSelectedMood] = useState('');
  const [notes, setNotes] = useState('');

  const handleAddMoodEntry = () => {
    const newEntry = {
      date: new Date().toLocaleDateString(),
      mood: selectedMood,
      notes: notes,
    };
    onAddMoodEntry(newEntry);
    setSelectedMood('');
    setNotes('');
  };

  return (
    <div>
      <h2>Add Mood Entry</h2>
      <label>Select Mood:</label>
      <select onChange={(e) => setSelectedMood(e.target.value)} value={selectedMood}>
        <option value="">-- Select Mood --</option>
        <option value="happy">Happy</option>
        <option value="sad">Sad</option>
        <option value="neutral">Neutral</option>
      </select>
      <br />
      <label>Notes:</label>
      <textarea onChange={(e) => setNotes(e.target.value)} value={notes}></textarea>
      <br />
      <button onClick={handleAddMoodEntry}>Add Entry</button>
    </div>
  );
};

export default MoodEntryForm;
