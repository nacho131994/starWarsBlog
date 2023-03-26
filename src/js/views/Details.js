import React, { useEffect } from "react";
import { useAppContext } from "../store/context";
import { useParams } from "react-router";
const Details =()=>{
const {store , actions } = useAppContext(); 
const {fetchDetails} =actions;

const {type , id } = useParams();
const api =`https://www.swapi.tech/api/${type}/${id}`;

useEffect(()=>{


},[api])

const params= useParams();
console.log("PARAMS:", params)
return  <h1>Details</h1>

}
export default Details;