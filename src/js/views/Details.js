import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
const Details =()=>{


const { id } = useParams();
const api =`https://www.swapi.tech/api/people/${id}`;
const [detailPeople , setDetailPeople] = useState([])
const [properties , setProperties]= useState([])

useEffect(()=>{
fetch(api)
.then(res=>res.json())
.then(res => {setDetailPeople(res.result)
 return res.result.properties
}).then (res => setProperties(res))
.catch(err=> console.log(err))

},[])
console.log(detailPeople)
console.log(properties)

const params= useParams();
console.log("PARAMS:", params)
return (
   <>
  
<div className="container m-auto row ">
<h1 className="details"><strong>Details</strong></h1>
<img className="col-4 m-4 peoplePhoto" src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />
<div className="col-4 detailsPeople">
<h1>{properties.name}</h1>

<h2>{detailPeople.description}</h2>
<p><u>Birth year</u>: {properties.birth_year}</p>
<p><u>Created</u>: {properties.created}</p>
<p><u>Height</u>: {properties.height}</p>
<p><u>Eye color</u>: {properties.eye_color}</p>
<p><u>Skin color</u>: {properties.skin_color}</p>

</div>
</div>
</>

)

}
export default Details;

