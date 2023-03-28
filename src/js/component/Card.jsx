import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../store/context.js";

const Card = ({characters ,index}) => {
 const {store , actions} = useAppContext();
 const { addFavorite } = actions;
const name=characters.properties.name;

  return (
    <>

  <div class="col-sm-4">
  <div class="card-sw cardStyle">
       <div key={characters.properties.uid}  className=" m-3 ">
       <img src={`https://starwars-visualguide.com/assets/img/characters/${characters.uid}.jpg`} className="card-img" alt="..."/>
       <div className="card-body">
       <h3 className="card-title">{name}</h3>  
             <p>Hair color: {characters.properties.hair_color}</p>
             <p>Gender: {characters.properties.gender}</p>
             <p>Eye color: {characters.properties.eye_color}
             </p>
          </div>
             
            <Link  to={`people/${characters.uid}`} className="btn btn-primary btn-propierties">More info</Link>
            <Link to =""><img onClick={()=>addFavorite(name)} className="iconLike" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8moNqBsueRrMKWQJeVKTeO2oHHUyfS6jr_g&usqp=CAU"/>
            </Link> 
          </div>
        </div>
</div>
    </>
  );
};


export default Card;