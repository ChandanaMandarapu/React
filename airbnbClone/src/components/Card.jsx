// import React from 'react'

const Card = () => {
  return (
    <div className="card">
        <img src="https://media.istockphoto.com/id/896319030/photo/girl-exploring-barcelona.jpg?s=612x612&w=0&k=20&c=quXCnOO_XejCTpBCnor0C2LAxES_hL8jwn7IB5lb5B0=" alt="" className="card--image"/>
        <div className="card--stats">
                ⭐
                <span>5.0</span>
                <span className="gray">(6) • </span>
                <span className="gray">IND</span>
            </div>
            <p>Life Lessons with Maha Vishwakarma</p>
            <p>From <b>$136</b>/ person</p>
    </div>
  )
}

export default Card