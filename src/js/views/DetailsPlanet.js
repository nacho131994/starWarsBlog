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
    
    <div className="container m-auto row"> 
    <h1>Details</h1>   
    <img className="col-6 m-4" src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
    <div className="col-4">
    <h1>{propertiesPlanet.name}</h1>
    <h2>{detailPlanet.description}</h2>
    <p>Climate: {propertiesPlanet.climate}</p>
    <p>Created: {propertiesPlanet.created}</p>
    <p>Diameter: {propertiesPlanet.diameter}</p>
    <p>Edited: {propertiesPlanet.edited}</p>
    <p>Orbital period: {propertiesPlanet.orbital_period}</p>
    <p>Surface water: {propertiesPlanet.surface_water}</p>
    <p>Terrain: {propertiesPlanet.terrain}</p>
    <p>Population: {propertiesPlanet.population}</p>
   
    </div>
    </div>
    </>
    )
}

export default DetailsPlanet;
