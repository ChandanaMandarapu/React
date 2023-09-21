
import { useState } from "react";
function UpdArrObj() {
    const [cartoon,setCartoon] = useState([
        {id:1,title:"doreamon",ratings:9},
        {id:2,title:"shinchan",ratings:8},
      ]);
      const handleClick = () =>{
        setCartoon(
          cartoon.map((c) => (c.id === 1?{...cartoon,title:"kiteretsu"}:c))
        )
    }
  return (
    <div>
        {cartoon.map(cartoon => (
        <li key = {Math.random()}>{cartoon.title}</li>
      ))}
      <button onClick={handleClick}>change name</button>
    </div>
  )
}

export default UpdArrObj