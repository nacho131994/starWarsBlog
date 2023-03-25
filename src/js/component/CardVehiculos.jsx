import React from "react";
import { Link } from "react-router-dom";
const CardVehiculos=({key , vehiculos})=>{
    return(
      

      
 <div className="card-sw cardStyle " key={key}>
  <img src={`https://starwars-visualguide.com/assets/img/vehicles/${vehiculos.uid}.jpg`} className="card-img mt-2" alt="..."/>
  <div className="card-body">
    <h3 className="card-title">{vehiculos.properties.name}</h3>
    <p>consumables:{vehiculos.properties.consumables}</p>
    <p>vehicle class:{vehiculos.properties.vehicle_class}</p>
  
    <Link to="/:type/:id" className="btn btn-primary btn-propierties">More info</Link>
  </div>
</div>
    )
}
export default CardVehiculos;

