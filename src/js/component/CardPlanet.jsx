import React from "react";
import { Link } from "react-router-dom";
const CardPlanet=({key , planet})=>{
    return(
<>
      <div className="card-sw cardStyle">
       
       <div key={planet.uid} className=" m-3 ">
      <img src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`} className="card-img" alt="..."/>
      <div className="card-body">
      
        <h3 className="card-title">{planet.properties.name}</h3>
        <p>{planet.properties.population}</p>
        <p>{planet.properties.climate}</p>
        <Link to="/:type/:id" className="btn btn-primary btn-propierties">More info</Link>
                </div>
              </div>
          </div>





   </>



     
      
     
    )
}
export default CardPlanet;

