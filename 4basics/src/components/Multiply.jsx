

const Multiply = () => {
    const myName = "Chandana Mandarapu"
    const multiply = (a,b) => a*b;
    const specialClass = "simple-class"
    const myfrndName = "Kuldeep Kaware"
  return (
    <>
    {/* rendering variable values */}
      <h1>{myName}</h1>
      <h2>{myfrndName}</h2>
      {/* rendering expressions */}
      <p>2 + 2 = {2 + 2}</p>
      <p>4 + 4 = {4 + 4 }</p>
      {/* rendering arrays */}
      <p>My Friends List : {["chandu","kuldeep","ma"]}</p>
      <span>My fav List: {["artsketches","music | guitar","dance","books"]}</span>
      {/* rendering functional value */}
      <p>2* 8 = {multiply (2,8)}</p>
      <p>333*4 = {multiply(333,4)}</p>
      {/* rendering classes */}
      <p className={specialClass}> This is a specialClass</p>
    </>
  )
} 

export default Multiply
