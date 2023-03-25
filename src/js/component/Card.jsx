import React from "react";
import { Link } from "react-router-dom";


const Card = ({characters}) => {
  return (
    <>
  <div className="card-sw cardStyle">
       
       <div key={characters.properties.uid}  className=" m-3 ">
       <img src={`https://starwars-visualguide.com/assets/img/characters/${characters.uid}.jpg`} className="card-img" alt="..."/>
       <div className="card-body">
       <h3 className="card-title">{characters.properties.name}</h3>
             
             <p>Hair color: {characters.properties.hair_color}</p>
             <p>Gender: {characters.properties.gender}</p>
             <p>Eye color: {characters.properties.eye_color}
             </p>
    
            <Link to="/:type/:id" className="btn btn-primary btn-propierties">More info</Link>
                 </div>
               </div>
           </div>





    </>
  );
};


export default Card;