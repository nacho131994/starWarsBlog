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
		
		<ul className="dropdownStyle d-flex mt-3">	
			<li className="nav-item dropdown ">
          	<a className="nav-item p-3 dropdown-toggle " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Favoritos
         	 </a>
			 <img className="iconLikeFavorite" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALoAAAC6CAMAAAAu0KfDAAAAbFBMVEX/////Bwf/AAD//Pz/+Pj/Ojr/6Oj/Fhb/8vL/4eH/3Nz/nJz/Y2P/k5P/1tb/ISH/vr7/g4P/w8P/MjL/Kir/7e3/WVn/amr/rKz/tLT/R0f/UlL/0dH/yMj/TEz/enr/pKT/QED/cHD/iori5q4qAAAGC0lEQVR4nO2diZaqMAyGIWyyqKgguDvy/u94Ace54rTQJYUyp98DJP+pIU3TRcsyGAwGg8FgMBgMfwfnG13tkXD9MNrGt2R/9LzjNdnEl9DPJTw6eRhe4k1ybeztk1u8jULfxdP7wj+ny1MAH+yK+zYSUu9E23ux+7QXnJbp2cfU7VziJGtM211ad8fqwO3MP1RHgr3WYFbEF6zoccvCI7j57y04VRGPwahqfz+6Qa8oUcTfPZvq5sfZughZ7fmPNV33y2DgLWV1uyXpdyWqvzGNfHhjtQelzCfrXhIWP6+Rug/GvF9mHAYT8ZjPl2tWPy9f/QYve2bhrcF1JZhtzuxD/vKVxQu6vUWc8dqD5Cyi/OBxOmp82UVOs+cXtoBB78At3Il5h/zpCoIV2eA5EDQYcwb8YinkqPW1JfhyLuL2lj1B+Bt3I+qpCZrfWc0tBYLlR/uGJ0suhR01vtaf2p2SK1X9Mlixx4xYnL9r7/iSVN7EO6tyiV/35St9t5fKjURtLyjZlG/lxuip/W1yEv5C3+xlA5PdE38v7an5Vn8qmkj2N2zt7Vnm1Q2Cp9rXyUccidreZlg5ws/buvpOaTJptmtvOGQEpn+yL7udwg8Y4dLa+xpSLpXRu77WdUmwCvDsDSw+QqxBb3wlrpsgmvP6F2LCpQvR2eGAaa1/2KMToq86G/MW6P3mTn1LyBJz0O2h5Ti3tZ451UcMTQVAQp+XzrjDhA0Adbnn4GVGNcCSVv0udrpL39EWTJHmymvttBwT6y+dtub40l/6kSJde+V1jiErD/WXbgO5jsEsOFQB5GZYNQfp5BKsmIP0gij9OAfp5BSjf26kLvMQF0jKAO+PSde++GogF2D5PKSTdk1mPOruPKSTtgmc+Uq3ZiH9ryXHOc+m1zlIvxKl4/Tw1QJ7ovTHHKQ/iNJxdmLUAhVR+n0O0u9E6ekcpKdE6f4cpFN6vXOQTlZu6d2ibqC1kGYwJ8GJIl3/Rgx1J+yiv3TalrX2KQaAdihuoXvZC1+0XQ33prt0+imwre7StzTl1kr+/JFKIKOcoazJ9W72woN6dFX34pFSNn4HO+p5BGT6z64tdF4pwaP3hGyMdd4JH7D74sWyQn07GuAN3KjQd1aCW79yK9K1aAfq+YAfdC3aKc2jTrTrOexA2afuoOeMSukddTnjnarEoz3vOYir4zqPfnSqw0q/3A5HlkG3miJMM+29Jxy7IaNbJQMP5jsyK70KyL4lxi9KvaSzhkuLTidkKWdgaPj6rFJhzXlz86yLdgi4722WekyqzLep3lggXW2RVG5XXPcen+Q6fKpQCCivx336kIFMSHmdZqbWDuuenlE/q2kPa8CO61GILumU2mFH744O46TTVTOQHeQezpC+5iqsHCSVNz33SbQDZV+aT/sUeQYCBOWWdRg/3us4x1BuOaNrh510nL+0p+OWkbBO8d6jGvWGW899NRHC8b5VCJjfJmIjOo4z8ABHidmfop3vRR1h5Xt05XXMjFG/Q4IcLU9y9TseQH/URw7npjZmAG7qHum7q0w0EDC/pSKAyokVMpzX4agoW3zADqXg6kNRb4mrJSpKpOKs0tCrEkjkBXaiAWVJ8ZNFhXuSAOyNYLuFH/eOqR0gVvBiKZUDXswgrJ/5SLEmp3pdMapwq92ixBAPO9R1BRshQqIBRZXiELl0B76ut1Af5WXHrSTfwoNqzNTS1S71jt/ISfEDR+qdRsWV4hAX0YpmhEpxiJXYo1VwnSApfhJyv4nbKE8ULPz58bmXrNMlxU8WnEmyToqjVYqDcCXJgRffxubAvuyDAKd3jkbKemAMviZPip+c2S4Jw0mDpPhJxKJdSTdUnny4Fwz7kZbP3AxU8HV1PrVCOpu+ZR/YQyfQp8SJ6UkS1myHW6fCLWn9VMik/rFhBBxKqwBsxA1FVRCvTACM0A2Vh/DW70jdUHmiU3fgof+ZWq2Iupt9mk6hZDqv5rK9na4N7v+YgavmSfEXj6d24DwHrQNO1SR4CLj+FEMTFssAIOD7KxJdcO/TtuZkcMqJW3MGg8FgMBgMBoPBwM0/K/JwLKZYLqQAAAAASUVORK5CYII="/>
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
