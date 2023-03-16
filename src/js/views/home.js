import React, {useState, useEffect} from "react";

import "../../styles/home.css";
import Card from "../component/card.jsx";


export const Home = () =>{

	const [people,setPeople]=useState([]);
	useEffect(()=>{
		fetch("https://www.swapi.tech/api/people/")
			.then(res => res.json())
			.then(data => setPeople(data.results))
			.catch(err => console.error(err))
	})

	const [planets,setPlanets]=useState([]);
	useEffect(()=>{
		fetch("https://www.swapi.tech/api/planets/")
			.then(res => res.json())
			.then(data => setPlanets(data.results))
			.catch(err => console.error(err))
	})

	const [vehicles,setVehicles]=useState([]);
	useEffect(()=>{
		fetch("https://www.swapi.tech/api/vehicles/")
			.then(res => res.json())
			.then(data => setVehicles(data.results))
			.catch(err => console.error(err))
	})

	

	return(
		<div className="wrapper">
			<h1>people</h1>
				<div className="card-group people">
					{people.map((character,i)=>{
					return <Card title={character.name} />
					})}
				</div>

				<h1>planets</h1>
				<div className="card-group planets">
				
					{planets.map((planet,i)=>{
					return <Card title={planet.name} />
					})}
				</div>

				<h1>vehicles</h1>
				<div className="card-group vehicles">
				
					{vehicles.map((vehicle,i)=>{
					return <Card title={vehicle.name} />
					})}
				</div>
			</div>
		);
};
	