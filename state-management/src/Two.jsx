import { useState } from "react";

const Two = () => {
  const [thingsArray, setThingsArray] = useState[("Thing 1", "Thing 2")];

  function addItem() {
    // We'll work on this next
    setThingsArray(prevThingsArray => {
        return [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`]
    })
  }

  const thingsElements = thingsArray.map((thing) => <p key={thing}>{thing}</p>);

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      {thingsElements}
    </div>
  );
};

export default Two;
