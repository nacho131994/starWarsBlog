import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../store/context.js";
export const Navbar = () => {

	const context = useAppContext();
	const {store , actions} = context;
	const {favoriteList} = store;
  
	return (
		<>
		<nav className="navbar navbar-dark  mb-3">
			<Link to="/">
				<span className="navbar-brand m-5">
				<img className="iconNavbar" src="https://blog.phonehouse.es/wp-content/uploads/2017/12/1200px-Star_Wars_Logo.svg_.png"/>

				</span>
			</Link>
		<ul className="dropdownStyle  mt-3">	
			<li className="nav-item dropdown ">
          	<a className="nav-item p-3 dropdown-toggle " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Favoritos
         	 </a>
          	
			{favoriteList.lenght? (
			favoriteList.map((item,i)=>{
				return (<ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
            	<li><a className="dropdown-item" href="#">{item.name}</a></li>
            	<li><a className="dropdown-item" href="#"></a></li>
            	<li><a className="dropdown-item" href="#"></a></li>
          	</ul>)
			})) :
			(<ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
            	<li className="dontFavorite">You haven´t got favorite now</li>
          	</ul>)}
			
        	</li>
		</ul>
		</nav>
		
		</>
	);
};
