// import React from 'react'
import { useState } from "react";
function UpdObj() {
  const [movie, setMovie] = useState({
    title: "Extraction 2",
    ratings: 8,
  });

  // anytime u want to change the obj data in the state we need to give react a new obj we will be cloning our previous state and changing the value of ratings

  const handleClick = () => {
    // const copyMovie = {
    //   ...movie,
    //   ratings: 7,
    // };
    setMovie({...movie, ratings: 7});
  };
  return (
    <div>
      <h1>{movie.title}</h1>
      <p>Ratings:{movie.ratings}</p>
      <button onClick={handleClick}>Change Rating</button>
    </div>
  );
}

export default UpdObj;
