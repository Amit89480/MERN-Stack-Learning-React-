import React from 'react'
import { useLocation } from "react-router-dom";
import {
 Link
  } from "react-router-dom";

export const NavBar = () => {
    const location = useLocation();
console.log(location.pathname);
    
  return (
      <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">iNoteBook</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className=`nav-link ${}` aria-current="page" to="/About">About</Link>
        </li>
       </ul>
    </div>
  </div>
</nav>

    </div>
  )
}
