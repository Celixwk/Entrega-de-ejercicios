import "./CharacterPage.css";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import CharCard from "../../Components/CharCard/CharCard";

const CharacterPage = () => {
  
  const [data, setData]=useState([]);
  
  let {races} = useParams();

 useEffect(()=>{
  axios.get(`https://dragonball-api.com/api/characters?limit=100`)
  .then(char=> setData(char.data.items))},[])

  let tmp = null

  if (races === "No Human") {
     tmp=data.filter(elem=>elem.race!=="Human");
  }else{
     tmp=data.filter(elem=>elem.race===races);
  }
  
  

  return (
    <main id='character-page'>
        <h1 id="title-character">Character Page</h1>        
        {
          <div id="characters-species">
            {tmp.map((element)=>
              <div key={element.id}>
                <Link to={"/details/"+element.id}>
                    <CharCard img={element.image} nombre={element.name} especie={element.race} genero={element.gender} baseKi={element.ki} totalKi={element.maxKi} afiliacion={element.affiliation}/>
                </Link>            
              </div>
            )}  
          </div>
        }
    </main>
  )
}

export default CharacterPage