import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../store/context.js";
const CardVehiculos=({key , vehiculos})=>{
  const {store , actions} = useAppContext();
  const { addFavorite } = actions;
 const name=vehiculos.properties.name;

    return(
<div class="col-sm-4">
 <div className="card-sw cardStyle " key={key}>
  <img src={`https://starwars-visualguide.com/assets/img/vehicles/${vehiculos.uid}.jpg`} className="card-img mt-2" alt="..."/>
  <div className="card-body">
    <h3 className="card-title">{name}</h3>
    <p>consumables:{vehiculos.properties.consumables}</p>
    <p>vehicle class:{vehiculos.properties.vehicle_class}</p>
            <div>
            <Link to="/characters/1" className="btn btn-primary btn-propierties">More info</Link>
            <Link to =""><img onClick={()=>addFavorite(name)} className="iconLike" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8moNqBsueRrMKWQJeVKTeO2oHHUyfS6jr_g&usqp=CAU"/>
            </Link>
            </div>   
  </div>
</div>
</div>
    )
}
export default CardVehiculos;

