import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<>
		<nav className="navbar navbar-dark  mb-3">
			<Link to="/">
				<span className="navbar-brand m-3 h1">
				<img className="iconNavbar" src="https://blog.phonehouse.es/wp-content/uploads/2017/12/1200px-Star_Wars_Logo.svg_.png"/>

				</span>
			</Link>
		<ul className="dropdownStyle  mt-3">	
			<li className="nav-item dropdown ">
          <a className="nav-link dropdown-toggle " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Favoritos
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#"></a></li>
            <li><a className="dropdown-item" href="#"></a></li>
            <li><a className="dropdown-item" href="#"></a></li>
          </ul>
        </li>
		</ul>
		</nav>
		
		</>
	);
};
