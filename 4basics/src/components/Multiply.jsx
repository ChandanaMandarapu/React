

const Multiply = () => {
    const myName = "Chandana Mandarapu"
    const multiply = (a,b) => a*b;
    const specialClass = "simple-class"
  return (
    <div>
      <h1>{myName}</h1>
      <p>2 + 2 = {2 + 2}</p>
      <p>My Friends List : {["chandu","kuldeep","ma"]}</p>
      <p>2* 8 = {multiply (2,8)}</p>
      <p className={specialClass}> This is a specialClass</p>
    </div>
  )
} 

export default Multiply
