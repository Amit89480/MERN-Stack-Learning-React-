import React from 'react'
import { useLocation } from "react-router-dom";
import {Link} from "react-router-dom";

export const NavBar = () => {
const location = useLocation();

    
  return (
      <div>
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/"?"active":" " }`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          < className={`nav-link ${location.pathname==="/About"?"active":" " }`} href="/About">About</>
        </li>
       
      
      </ul>
      <form className="d-flex" role="search">
      <Link className="btn btn-primary mx-1" to="/login" type="submit">Login</Link>
      <Link className="btn btn-primary mx-1"to="/signup" type="submit">Sign Up</Link>
      </form>
    </div>
  </div>
</nav>

    </div>
  )
}
