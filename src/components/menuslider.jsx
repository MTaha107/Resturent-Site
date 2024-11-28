import React from 'react'
import burgercard from "./images/burger-card4.jpg"
import burgercard3 from "./images/burger-card5.jpeg"
import burgercard6 from "./images/burger-card6.jpeg"


export default function Menuslider() {
  return (
    <>
    <h1 className='menuhead' >HOT OFFERS</h1>
    <div className='menusliderpage' >
     <img src={burgercard} alt="Offers" width={350} height={300} />
     <img src={burgercard6} alt="Offer" width={350} height={300} />
    </div>
    </>
  )
}
