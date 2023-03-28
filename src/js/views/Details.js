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
  

<h1>Details</h1>
<div className="container row">
<img className="col-4 m-4" src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />
<div className="col-4">
<h1>{properties.name}</h1>

<p>{detailPeople.description}</p>
<p>birth_year: {properties.birth_year}</p>
<p>created: {properties.created}</p>
<p>height: {properties.height}</p>
<p>eye_color: {properties.eye_color}</p>
<p>skin_color:  {properties.skin_color}</p>

</div>
</div>
</>

)

}
export default Details;

/*description
: 
"A person within the Star Wars universe"
properties

eye_color
: 
"yellow"
gender
: 
"n/a"
hair_color
: 
"n/a"
height
: 
"167"
homeworld
: 
"https://www.swapi.tech/api/planets/1"
mass
: 
"75"
name
: 
"C-3PO"
skin_color
: 
"gold"
url
: 
"https://www.swapi.tech/api/people/2"
[[Prototype]]
: 
Object
uid
: 
"2"
__v
: 
0
_id
: 
"5f63a36eee9fd7000499be43"
[[Prototype]]
: 
Object*/