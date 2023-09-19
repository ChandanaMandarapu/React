import { useState } from "react";

const Content = () => {
  const [items] = useState([
    {
      id: 1,
      checked: false,
      item: "Almonds 1kg | Cashews 1kg",
    },
    {
      id: 2,
      checked: false,
      item: "Item 2",
    },
    {
      id: 3,
      checked: false,
      item: "Item 3",
    },
  ]);

  /* const handleNameChange = () => {
        const names = ["pallavi","karthik","kuldeep"];
        const int = Math.floor(Math.random() * 3)
        setName(names[int]) 
    }
    const handleClick = () =>{
      setCount(count + 1)
      setCount(count + 1)
      console.log(count)
    }
    const handleClick2 = () =>{
      console.log(count)
    } */
  return (
    <main>
      {/* <p onDoubleClick={handleClick}>
            Hello {name}
            </p>
            <button onClick={handleNameChange}>Changed Name</button>
            <button onClick={handleClick}>Click it</button>
            <button onClick={handleClick2}>Click it</button>
             */}
             <ul>
              setItems
              {items.map((item) => (
                <li className="item" key= {item.id}>
                  <input 
                  type="checbox" 
                  checked = {item.checked}
                  />
                  <label>{item.item}</label>
                  <button>Delete</button>
                </li>
              ))}
             </ul>
    </main>
  );
};

export default Content;
