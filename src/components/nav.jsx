import React from 'react'

export default function Nav() {
  return (
   <>
   <nav className="navbar navbar-expand-lg    Navbar">
  <div className="container-fluid">
    <a className="navbar-brand text-light" href="#">Borger point</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">Cart</a>
        </li>
     
        <li className="nav-item">
          <a className="nav-link text-light " href="#" tabIndex="-1" aria-disabled="true">About us</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-light" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
   </>
  )
}
