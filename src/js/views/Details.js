import React from "react";
import { useAppContext } from "../store/context";
import { useParams } from "react-router";
const Details =()=>{
  
const params= useParams();
console.log("PARAMS:", params)
return  <h1>Details</h1>

}
export default Details;