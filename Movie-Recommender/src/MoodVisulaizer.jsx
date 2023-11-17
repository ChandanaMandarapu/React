import React from 'react';

const MoodVisualizer = ({ mood, songDetails, relatedArtists }) => {
  return (
    <div className="mood-visualizer">
     
      <p>{`Mood: ${mood}`}</p>

    
      <div className="song-details">
        <img src={songDetails.albumCover} alt="Album Cover" />
        <p>{`Artist: ${songDetails.artist}`}</p>
        <p>{`Album: ${songDetails.album}`}</p>
        <p>{`Release Date: ${songDetails.releaseDate}`}</p>
      </div>

      <div className="related-artists">
        <p>Related Artists:</p>
        <ul>
          {relatedArtists.map((artist) => (
            <li key={artist.id}>{artist.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MoodVisualizer;
