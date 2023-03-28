import React, { createContext, useContext, useState, useEffect } from "react";
import Loader from "../component/loader";
const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [people, setPeople] = useState([]);
  const [vehiculos , setVehiculos] = useState([])
  const [planets , setPlanets] = useState([])
  const [favoriteList , setFavoriteList] = useState([])

const fetchUrls = (url)=>{
 return (fetch(url)
  .then(res=>res.json())
  .then(res => res)
  .catch(err=> console.log(err) )
 )
}
const fetchDetails =(url)=>{
  return (fetch(url)
  .then(res=>res.json())
  .then(res => res.result)
  .catch(err=> console.log(err) )
 )
}

const getCharacters = (setState , url) => {
   return (fetchUrls(url)
      .then((data) => {
        console.log(data.results );
          const res = data.results ;
          const allFetchs = res.map((characters)=>
            fetchDetails(characters.url))
          return Promise.all(allFetchs);
      })
      .then(res => {
        console.log(res)
        setState(res);
      })
      .catch((err) => console.log(err))
  )};

  useEffect(() => {
    getCharacters(setPeople, "https://www.swapi.tech/api/people");
    getCharacters(setPlanets,"https://www.swapi.tech/api/planets" )
    getCharacters(setVehiculos,"https://www.swapi.tech/api/vehicles/" )
  }, []);


  const addFavorite =(name , id)=>{
    const newFavorite ={
      name,
      id
    } ;

    setFavoriteList([...favoriteList , newFavorite])

  }

const handelDeleteFavorite=(nameFavoriteDelete) => {
        setFavoriteList(prev=>prev.filter((element)=>{
      return (nameFavoriteDelete !== element.name);
  }));
}
console.log(favoriteList)
  
 /* No Found, eternal loading
 const [loading , setLoading] = useState(true)
  if(loading){
    return <Loader/>
  }
  useEffect(()=>{
    if(people.length){
      setLoading(false)
    }
  }, [people])
*/
 
const  store ={
  people,
  planets,
  vehiculos,
  favoriteList
}
const actions={
addFavorite,
fetchDetails,
handelDeleteFavorite
}

  return (
    <AppContext.Provider value={{ store, actions }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);


export default AppContextProvider;
