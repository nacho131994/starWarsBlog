import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
const DetailsPlanet =()=>{
    const { id } = useParams();
    const api =`https://www.swapi.tech/api/planets/${id}`;
    const [detailPlanet , setDetailPlanet] = useState([])
    useEffect(()=>{
    fetch(api)
    .then(res=>res.json())
    .then(res => {setDetailPlanet(res.result)
    console.log(res.result.description)})
    .catch(err=> console.log(err))
    
    },[api])
    console.log(api)
    
    const params= useParams();
    console.log("PARAMS:", params)
    return (
       <>
    <h1>Details</h1>
    <div className="container row">    
    <img className="col-6 m-4" src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
    <div className="col-4">
    <p>{detailPlanet.description}</p>
    </div>
    </div>
    </>
    )
}

export default DetailsPlanet;