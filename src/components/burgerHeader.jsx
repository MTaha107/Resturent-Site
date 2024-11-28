import React from 'react'
import flyingburger from "./images/flying-burger.png"

export default function Header() {
  return (
    <div className='header' >
      <div className="headinfo">
        <h1>Crafting your <br/> 
            Exceptional Dining <br />
            <span> Reservations </span></h1>
            
            <button type="button" className="btn btn-light">Order Now</button>
      </div>

      <div className="burgerimg">
        <img src={flyingburger} alt="burger logo" width={400} />
      </div>

    </div>
  )
}
