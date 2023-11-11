// import React from 'react';

const MoodHistory = ({ moodEntries, onClearHistory }) => {
    return (
      <div className="mood-history">
        <h2>Mood History</h2>
        <ul>
          {moodEntries.map((entry, index) => (
            <li key={index}>
              <strong>{entry.date}:</strong> {entry.mood}
              {entry.notes && <span> - Notes: {entry.notes}</span>}
            </li>
          ))}
        </ul>
        <button onClick={onClearHistory}>Clear History</button>
      </div>
    );
  };
  
  export default MoodHistory;