import React from "react";
import { useAppContext } from "../store/context";
import { useParams } from "react-router";
const Details =()=>{
const params= useParams();
console.log("PARAMS:", params)


}
export default Details;