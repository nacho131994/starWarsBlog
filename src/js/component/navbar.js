import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../store/context.js";
export const Navbar = () => {

	const context = useAppContext();
	const {store , actions} = context;
	const { favoriteList} = store;
	const {handelDeleteFavorite} = actions;
  
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
          	<ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
			
			{favoriteList.map((item,i)=>{
				return (

            	<li className="d-flex">
					<Link to={item.id} className="dropdown-item" key={i} href="#">{item.name}</Link>
					<img className="iconDelete" onClick={()=>handelDeleteFavorite(item.name)} src="https://ayudawp.com/wp-content/uploads/2018/04/borrar-plugins-wordpress.png"/>
				</li>
			)})
          	}
			</ul>
        	</li>
		</ul>
		</nav>
		
		</>
	);
};
