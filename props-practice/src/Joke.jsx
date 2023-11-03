import React from 'react'

const Joke = ({setup , punchline}) => {
  return (
    <div className='jokes'>
        <h3 className="setup">Setup: {setup}</h3>
        <hr />
        <p className="puncline">Punchline: {punchline}</p>
        
    </div>
  )
}

export default Joke