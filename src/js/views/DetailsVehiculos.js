import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
const DetailsVehiculos =()=>{
    
    const { id } = useParams();
    const api =`https://www.swapi.tech/api/vehicles/${id}`;
    const [detailsVehiculos , setDetailVehiculos] = useState([])
    const [propertiesVehucles  , setPropertiesVehicles]= useState([])
   
    useEffect(()=>{
    fetch(api)
    .then(res=>res.json())
    .then(res => {setDetailVehiculos(res.result)
    console.log(res.result.description)
    setPropertiesVehicles(res.result.properties)
})
    .catch(err=> console.log(err))
    
    },[api])
    console.log(api)
    
    const params= useParams();
    console.log("PARAMS:", params)
    console.log(propertiesVehucles)

    return (
       <>
    
    <div className="container m-auto row">    
    <h1>Details</h1>
    <img className="col-6 m-4" src={`https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`} />
    
    <div className="col-4">
    <h1>{propertiesVehucles.name}</h1>
    <h2>{detailsVehiculos.description}</h2>
    <p>Model: {propertiesVehucles.model}</p>
    <p>Cargo capacity: {propertiesVehucles.cargo_capacity}</p>
    <p>Consumables: {propertiesVehucles.consumables}</p>
    <p>Cost in credits: {propertiesVehucles.cost_in_credits}</p>
    <p>Created: {propertiesVehucles.created}</p>
    <p>Edited: {propertiesVehucles.edited}</p>
    <p>Manufacturer: {propertiesVehucles.manufacturer}</p>
    <p>Length: {propertiesVehucles.length}</p>
    <p>Max atmosphering speed: {propertiesVehucles.max_atmosphering_speed}</p>
    <p>Passengers: {propertiesVehucles.passengers}</p>
    <p>Vehicle class: {propertiesVehucles.vehicle_class}</p>
    </div>
    </div>
    </>
    )
}

export default DetailsVehiculos;

cargo_capacity
: 
"200"
consumables
: 
"none"
cost_in_credits
: 
"unknown"
created
: 
"2020-09-17T17:46:31.415Z"
crew
: 
"2"
edited
: 
"2020-09-17T17:46:31.415Z"
films
: 
[]
length
: 
"2"
manufacturer
: 
"Kuat Drive Yards, Imperial Department of Military Research"
max_atmosphering_speed
: 
"90"
model
: 
"All Terrain Scout Transport"
name
: 
"AT-ST"
passengers
: 
"0"
pilots
: 
['https://www.swapi.tech/api/people/13']
url
: 
"https://www.swapi.tech/api/vehicles/19"
vehicle_class
: 
"walker"