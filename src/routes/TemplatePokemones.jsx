import { useParams } from "react-router-dom";
import axios from 'axios'
import { useEffect, useState } from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Badge } from "react-bootstrap";
import '../css/TP.css'
export default function TemplatePokemon(){
  const [pokemonName, setPokemonName] = useState('')

  let { nombre } = useParams()
  useEffect(()=>{
    
    function fetchData(){
      axios.get(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
      .then(res => {
        // console.log(res.data.sprites.back_default);
        return setPokemonName(res.data)})
      .catch(err => console.error("Errorsito",err))
    }
    fetchData()

  }, [nombre])
  return(
    <section className="TP-container container">
      <h1 className="TP-title text-center">{pokemonName.name}</h1>
      {pokemonName && <div className="row">
        <article  className="TP-desc-container col-12 col-md-4">
            <ul className="TP-main-desc">
              <h2>Estadisticas principales</h2>
              <li><label className="text-right">ID</label>
                <Badge bg="success">
                  #{pokemonName.id}
                </Badge>{' '} </li>
              <li>Tipo 
                <Badge bg="success">
                  {pokemonName.types[0].type.name}
                </Badge>{' '} 
              </li>
              <li><label className="label-item">Habilidades</label>
              <Badge bg="success">
                {pokemonName.abilities[0].ability.name}
              </Badge>{' '} 
              <Badge bg="success">
                {/* Comprobar si existe el elemento, ya que no todos los pokemones tienen muchas habilidades */}
                {pokemonName.abilities.length === 1 ? "": pokemonName.abilities[1].ability.name}
              </Badge>{' '}</li>
              <li>Movimientos 
                <Badge bg="danger">
                  {pokemonName.moves[0].move.name}
                </Badge>{' '} 
                <Badge bg="danger">
                  {pokemonName.moves[1].move.name}
                </Badge>{' '}
                {/* <Badge bg="danger">
                  {pokemonName.moves[2].move.name}
                </Badge>{' '} */}</li> 
              <li>Versiones
                <Badge bg="info">
                  {pokemonName.game_indices[0].version.name}
                </Badge>{' '} 
                <Badge bg="info">
                  {pokemonName.game_indices[1].version.name}
                </Badge>{' '} 
                <Badge bg="info">
                  {pokemonName.game_indices[2].version.name}
                </Badge>{' '} 
              </li>
            </ul>
        </article>
        <article className="col-12 col-md-4">
          {/* contenedor de la imagen */}
          <div className="TP-img-container text-center" >
            <img src={pokemonName.sprites.back_default} alt={`Imagen pokemon ${pokemonName.name}`}/>
          </div>
        </article>
        <article className="col-12 col-md-4">
          {/* Estadisticas secundarias */}
          <div>
            <ul className="TP-second-desc">
              <h2>Estadisticas secundarias</h2>
              <li>Altura <ProgressBar striped animated variant="info" now={pokemonName.height} label={`${pokemonName.height}`} /></li>
              <li>Peso <ProgressBar striped animated variant="warning" now={pokemonName.weight} label={`${pokemonName.weight}`}/> </li>
              <li>HP <ProgressBar striped animated variant="success" now={pokemonName.stats[0].base_stat} label={`${pokemonName.stats[0].base_stat}`}/></li>
              <li>Ataque <ProgressBar striped animated variant="danger" now={pokemonName.stats[1].base_stat} label={`${pokemonName.stats[1].base_stat}`}/> </li>
              {/* <li>Altura <ProgressBar striped animated variant="info" now={pokemonName.abilities.base_experience} label={`${pokemonName.abilities.base_experience}`} /></li> */}
            </ul>
          </div>
        </article>
        
      </div>
} 
    </section>
  );
}