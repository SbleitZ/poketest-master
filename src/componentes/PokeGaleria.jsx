import { useEffect } from "react";
import { useState } from 'react';
import PokeCard from './PokeCard'
/*Iconos*/
import {GrPowerReset} from 'react-icons/gr' 
/*CSS*/
import '../css/BotonReset.css' 
import axios from "axios";
import '../css/PokeGaleria.css'
export default function PokeGaleria(){
  const [pokemones, setPokemones] = useState([])

  useEffect(() =>{
    if(!(pokemones.length > 19)){
      let numeroR = Math.floor((Math.random() * (500-1+1))+1)
      //si genera numero repetido no hace nada
      if(!(pokemones.find((data) => data.id === numeroR) !== undefined)){
        axios.get(`https://pokeapi.co/api/v2/pokemon/${numeroR}`)
        // .then(res => res.json())
        .then(res =>{
        const resPokemon = {
          name: res.data.name,
          id: numeroR,
          imagen: res.data.sprites.back_default,
          vida: res.data.stats[0].base_stat,
          defensa: res.data.stats[2].base_stat,
          ataque: res.data.stats[1].base_stat,
          peso: res.data.weight,
          categoria: res.data.types[0].type.name
        }
        const nuevaData = [...pokemones, resPokemon]
        return setPokemones(nuevaData)
      })
      }
    }
  }, [pokemones])
  return (
    <section className="PG-container container">
    {/* <GrPowerReset /> */}
      <button className="button-reset d-flex align-items-center" onClick={() => {setPokemones([])}}><GrPowerReset className="icon-reset" /> Generar Nuevos pokemones</button>
      <div className="d-flex flex-wrap" style={{gap: "12px"}}>
        {
          pokemones.map((data)=> 
          <PokeCard
            key={data.id}
            id={data.id}
            imagen={data.imagen}
            nombre={data.name}
            vida={data.vida}
            defensa={data.defensa}
            ataque={data.ataque}
            peso={data.peso}
            categoria={data.categoria} /> )
        }
      </div>
      
    </section>
  );
}