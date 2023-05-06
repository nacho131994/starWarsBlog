import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../store/context.js";
const CardVehiculos=({key , vehiculos})=>{
  const {store , actions} = useAppContext();
  const { addFavorite } = actions;
 const name=vehiculos.properties.name;
const urlDetails = `vehicles/${vehiculos.uid}`
    return(
<div class="col-md-6 col-sd-6 col-lg-4">
 <div className="card-sw cardStyle " key={key}>
  <img src={`https://starwars-visualguide.com/assets/img/vehicles/${vehiculos.uid}.jpg`} className="card-img mt-2" alt="..."/>
  <div className="card-body-vehicles">
    <h3 className="card-title">{name}</h3>
    <p><strong>CONSUMABLES</strong>: {vehiculos.properties.consumables}</p>
    <p><strong>VEHICLE CLASS</strong> : {vehiculos.properties.vehicle_class}</p>
  </div>
  <div className="buttonsCard">
    <Link to={urlDetails} className="btn btn-primary btn-propierties">More info</Link>
    <Link to =""><img onClick={()=>addFavorite(name , urlDetails)} className="iconLike" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8moNqBsueRrMKWQJeVKTeO2oHHUyfS6jr_g&usqp=CAU"/></Link>
  </div>   
 
</div>
</div>
    )
}
export default CardVehiculos;

