import React from 'react';

const MoodHistory = ({ moodEntries }) => {
  return (
    <div>
      <h2>Mood History</h2>
      <ul>
        {moodEntries.map((entry, index) => (
          <li key={index}>
            <strong>{entry.date}:</strong> {entry.mood}
            {entry.notes && <span> - Notes: {entry.notes}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoodHistory;
