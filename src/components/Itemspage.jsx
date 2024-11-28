import React, { useState } from 'react'
import Items from './Items'

export default function Itemspage() {


  const [details, setdetails] = useState([])
  const [cross, setcross] = useState(false)

  function detailpage(product){
    setdetails([{...product}])
    setcross(true)
  }


  return (
    <div className='Itempage' >
         <h1 style={{textAlign: "center",color: "white"}} >Items</h1>




   { cross?  
   
    details.map((e)=>{
    return(<>
     <div className="detailpage p-3">
      <div className="crossbt"><button className='btn btn-light' onClick={()=>setcross(false)} >X</button></div>
      
      <div className='detailcontainer'>
    <div className="image m-3"><img src={e.image} alt="Product img" width={260} height={260} /></div>
    <div className="details">
      <div className="name">{e.Name}</div>
      <div className="dec">{e.Description}</div>
    </div>
    </div>

     <input className='m-3 bg-dark  text-light rounded  ' type="text" placeholder='Enter Your Name' />
     <input className='m-3 bg-dark text-light rounded ' type="number" placeholder='Enter Your Number'/>
     <input className='m-3 bg-dark text-light rounded ' type="text" placeholder='Enter Your Location' />
      <button className='btn btn-light' >Make Order</button>
   


  </div>
    </>)
  })


 :null
  
  
  }
    


    <div className="productContainer">
{
  Items.map((e)=>{
    return(<>
    <div className='innercard' >
    <img src={e.image} alt="product image" width={270} height={250} />
    <h3>{e.Name}</h3>
    <span  style={{fontSize: "1.4rem", color: "rgb(208, 198, 198)"}}  >{e.price}Rs</span>



    <div className='orderbt'>
    <span className="buynow btn btn-light m-1" onClick={()=> detailpage(e)} >Buy now</span>


    <div className='cart btn btn-dark m-1' >
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
    </svg>
    <span>Add to cart</span>
    </div>


    </div>
    </div>
    </>)
  })
} 
</div> 


    </div>
  )
}
