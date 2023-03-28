import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
const Details =()=>{


const { id } = useParams();
const api =`https://www.swapi.tech/api/people/${id}`;
const [detailPeople , setDetailPeople] = useState([])
useEffect(()=>{
fetch(api)
.then(res=>res.json())
.then(res => {setDetailPeople(res.result)
console.log(res.result)})
.catch(err=> console.log(err))

},[api])
console.log(api)

const params= useParams();
console.log("PARAMS:", params)
return (
   <>
<h1>Details</h1>
<img className="m-4" src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />
<p>{detailPeople.description}</p>


</>

)


}
export default Details;