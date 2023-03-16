import React from "react";

const Card=(props)=>{
    return(
 <div className="card">
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <a href="#" className="btn btn-primary">More info</a>
  </div>
</div>
    )
}
export default Card;