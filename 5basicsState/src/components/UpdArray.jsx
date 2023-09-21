
// updating array value in state
import { useState } from "react";

function UpdArray() {
  const [friends, setFriends] = useState(["anu", "aadhira"]);

  const addOne = () => {
    setFriends([...friends, "kuldeep"]);
  };

  const removeOne = () => {
    setFriends(friends.filter((f) => f !== "anu"));
  };

  const updateOne = () => {
    setFriends(friends.map((f) => (f === "anu" ? "anu pallavi" : f)));
  };

  return (
    <div>
      <ul>
        {friends.map((f) => (
          <li key={Math.random()}>{f}</li>
        ))}
      </ul>
      <button onClick={addOne}>Add One</button>
      <button onClick={removeOne}>Remove One</button>
      <button onClick={updateOne}>Update One</button>
    </div>
  );
}

export default UpdArray;
