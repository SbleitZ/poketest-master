import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PokeCard from "../componentes/PokeCard";
// import PokeCard from "../componentes/PokeCard";
function TemplateCategorias(){
  let { nombre_categoria } = useParams();
  //Para los nombres del tipo "x"
  // const [pokeName, setpokeName] = useState([]);
  //Fetch para obtener los datos de los pokemones
  // const estadoInicial = [[],[]]
  const [pokemones, setPokemones] = useState([]);
  const [counter, setCounter] = useState(1);
  nombre_categoria = nombre_categoria.toLocaleLowerCase();

  useEffect(() =>{
      if(counter<300){
        axios.get(`https://pokeapi.co/api/v2/pokemon/${counter}`)
        .then(res => {
        // console.log(res.data)
          if((res.data.types.find(dato=> dato.type.name === nombre_categoria)) !== undefined){
            console.log("Contiene")
            console.log(res.data)
            const resPokemon = {
              name: res.data.name,
              id: res.data.id,
              imagen: res.data.sprites.back_default,
              vida: res.data.stats[0].base_stat,
              defensa: res.data.stats[2].base_stat,
              ataque: res.data.stats[1].base_stat,
              peso: res.data.weight,
              categoria: res.data.types[0].type.name
            }
            const nuevaData = [...pokemones, resPokemon]
            return setPokemones(nuevaData)
          }
        })
        setCounter(counter+1)
      }
  }, [pokemones,counter,nombre_categoria])
  return(
    <>
    <div className="d-flex flex-wrap justify-content-center" style={{gap: "12px", padding: "30px"}}>
      {
        pokemones.length === 0 ? "Pokemones no encontrados":pokemones.map((data) => 
        <PokeCard
          key={data.id}
          id={data.id}
          imagen={data.imagen}
          nombre={data.name}
          vida={data.vida}
          defensa={data.defensa}
          ataque={data.ataque}
          peso={data.peso}
          categoria={data.categoria} />)
      }

    </div>
    
    </>
  );
}

export default TemplateCategorias;