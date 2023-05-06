import React from "react";
import { useAppContext } from "../store/context";

import "../../styles/home.css";
import Card from "../component/Card.jsx";
import CardPlanet from "../component/CardPlanet.jsx";
import CardVehiculos from "../component/CardVehiculos.jsx";


export const Home = () => {
  const context = useAppContext();
  const {store , actions} = context;
  const {people , planets ,vehiculos} = store;

  return (
    <>
    <div className="container p-4">
        <h1 className="titleCardGroup">Characters</h1>
        <div className="card-group">
        <div className="row">
        {people.map((characters, index) => (
        <Card  characters={characters} index={index} />
      
      ))}
      </div>
      </div>
    </div>
  <div className= "container  p-4">
<h1 className="titleCardGroup">Planets</h1>
<div className="card-group">
        <div className="row">
					{planets.map((planet,i)=>{
			return <CardPlanet key={i} planet={planet}/>
					})}
				</div>
</div>
</div>
<div className="container p-4">
				<h1 className="titleCardGroup">Vehicles</h1>
        <div className="card-group">
        <div className="row">
					{vehiculos.map((vehicle,i)=>{
				return <CardVehiculos key={i}  vehiculos={vehicle}/>
					})}
				</div>
</div>
</div>
    
    </>
  );
};
