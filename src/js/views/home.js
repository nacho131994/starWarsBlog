import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
const Card=[{
	img: "https://i.blogs.es/1da08b/1366_2000-9-/1366_2000.jpeg",
	title: "Star Wars",
	description: "Star Wars",
	button: "Star Wars",
	buttonLike :"Star Wars"
},
{
	img: "https://i.blogs.es/1da08b/1366_2000-9-/1366_2000.jpeg",
	title: "Star Wars",
	description: "Star Wars",
	button: "Star Wars",
	buttonLike :"Star Wars"
},
{
	img: "https://i.blogs.es/1da08b/1366_2000-9-/1366_2000.jpeg",
	title: "Star Wars",
	description: "Star Wars",
	button: "Star Wars",
	buttonLike :"Star Wars"
},{
	img: "https://i.blogs.es/1da08b/1366_2000-9-/1366_2000.jpeg",
	title: "Star Wars",
	description: "Star Wars",
	button: "Star Wars",
	buttonLike :"Star Wars"
},
{
	img: "https://i.blogs.es/1da08b/1366_2000-9-/1366_2000.jpeg",
	title: "Star Wars",
	description: "Star Wars",
	button: "Star Wars",
	buttonLike :"Star Wars"
},
{
	img: "https://i.blogs.es/1da08b/1366_2000-9-/1366_2000.jpeg",
	title: "Star Wars",
	description: "Star Wars",
	button: "Star Wars",
	buttonLike :"Star Wars"
}];

return(
	<div className="wrapper">
		<div className="container row m-auto">
	 {Card.map((item,index)=>{
		return(
		<div className="card col-3 w-25 m-5 " key={index}>
			  <img src="..." className="card-img-top" alt="..."/>
				  <div className="card-body">
						<h5 className="card-title">{item.title}</h5>
					 <p className="card-text">{item.description}</p>
						<a href="#" className="btn btn-primary">Go somewhere</a>
				  </div>
		</div>
)})
}
 
	
	
	
</div>
</div>
	
)

};
	

