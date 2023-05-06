import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../store/context.js";

const Card = ({characters ,index}) => {
 const {store , actions} = useAppContext();
 const { addFavorite } = actions;
const name=characters.properties.name;


const urlDetails = `people/${characters.uid}`;
  return (
    <>

  <div class="col-md-6 col-sd-6 col-lg-4">
  <div class="card-sw cardStyle">
       <div key={characters.properties.uid}  className=" m-3 ">
       <img src={`https://starwars-visualguide.com/assets/img/characters/${characters.uid}.jpg`} className="card-img" alt="..."/>
       <h3 className="card-title">{name}</h3>  
      
       <div className="card-body"> 
     
             <p><strong>HAIR COLOR</strong>: {characters.properties.hair_color}</p>
             <p><strong>GENDER</strong>: {characters.properties.gender}</p>
             <p><strong>EYE COLOR</strong>: {characters.properties.eye_color}
             </p>
        </div>
        <div className="buttonsCard">  
            <Link  to={urlDetails} className="btn btn-primary btn-propierties">More info</Link>
            <Link to =""><img onClick={()=>addFavorite(name , urlDetails)} className="iconLike" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8moNqBsueRrMKWQJeVKTeO2oHHUyfS6jr_g&usqp=CAU"/>
            </Link> 
          </div>
          </div>
</div>
</div>
    </>
  );
};


export default Card;