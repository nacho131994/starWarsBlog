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
    <h1>Details</h1>
    <div className="container row">    
    <img className="col-6 m-4" src={`https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`} />
    
    <div className="col-4">
    <h1>{propertiesVehucles.name}</h1>
    <p>{detailsVehiculos.description}</p>
    <p>model: {propertiesVehucles.model}</p>
    <p>cargo_capacity: {propertiesVehucles.cargo_capacity}</p>
    <p>consumables: {propertiesVehucles.consumables}</p>
    <p>cost in credits: {propertiesVehucles.cost_in_credits}</p>
    <p>created: {propertiesVehucles.created}</p>
    <p>edited: {propertiesVehucles.edited}</p>
    <p>cargo_capacity: {propertiesVehucles.films}</p>
    <p>manufacturer: {propertiesVehucles.manufacturer}</p>
    <p>length: {propertiesVehucles.length}</p>
    <p>max atmosphering speed: {propertiesVehucles.max_atmosphering_speed}</p>
    <p>passengers: {propertiesVehucles.passengers}</p>
    <p>vehicle class: {propertiesVehucles.vehicle_class}</p>
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