// import React from 'react'
import { useState, useEffect } from "react";
function Effect() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      if (data && data.length) setData(data);
    }
    getData();
  }, []);
  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key = {Math.random()}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Effect;
