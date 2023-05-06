import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
const DetailsPlanet =()=>{
    const { id } = useParams();
    const api =`https://www.swapi.tech/api/planets/${id}`;
    const [detailPlanet , setDetailPlanet] = useState([])
    const [propertiesPlanet , setPropertiesPlanet]= useState([])

    useEffect(()=>{
    fetch(api)
    .then(res=>res.json())
    .then(res => {setDetailPlanet(res.result)
    console.log(res.result.properties)
    setPropertiesPlanet(res.result.properties)})
    .catch(err=> console.log(err))
    
    },[api])
    console.log(propertiesPlanet)
    
    const params= useParams();
    console.log("PARAMS:", params)
    return (
       <>
    
    <div className="container m-auto row "> 
    <h1 className="details"><strong>DETAILS</strong></h1>   
    <img className="col-6 m-4 planetPhoto" src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
    <div className="col-4 detailsPlanets">
    <h1>{propertiesPlanet.name}</h1>
    <h2>{detailPlanet.description}</h2>
    <p><u>Climate</u>: {propertiesPlanet.climate}</p>
    <p><u>Created</u>: {propertiesPlanet.created}</p>
    <p><u>Diameter</u>: {propertiesPlanet.diameter}</p>
    <p><u>Edited</u>: {propertiesPlanet.edited}</p>
    <p><u>Orbital period</u>: {propertiesPlanet.orbital_period}</p>
    <p><u>Surface water</u>: {propertiesPlanet.surface_water}</p>
    <p><u>Terrain</u>: {propertiesPlanet.terrain}</p>
    <p><u>Population</u>: {propertiesPlanet.population}</p>
   
    </div>
    </div>
    </>
    )
}

export default DetailsPlanet;
