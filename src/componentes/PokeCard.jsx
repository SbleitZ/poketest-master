/*Componentes bootstrap*/
import Badge from 'react-bootstrap/Badge' 
/*Iconos*/ 
import {AiFillHeart} from 'react-icons/ai'

import {BiCategoryAlt} from 'react-icons/bi'
/*CSS*/
import '../css/PokeCard.css'
import { Link } from 'react-router-dom'
export default function PokeCard({ id, nombre, imagen, vida, peso, categoria, defensa,ataque}){
  return (
    <>
      <div className='pokecard-container'>
        <p className='pokecard-name text-center'>{nombre}</p>
        <Link to={`pokemones/${nombre}`} replace={true} />
        <div className='pokecard-img-container d-flex align-items-center justify-content-center'>
          <Link to={`pokemones/${nombre}`} replace={true}>
            <img className="img-fluid" src={imagen} alt={`Pokemon ${nombre}`}/>
          </Link>
        </div>
        <article className='pokecard-desc'>
          <Badge bg="light" text="dark">
            # {id}
          </Badge>{' '}
          <Badge bg="danger">
            <AiFillHeart/>{vida}
          </Badge>{' '}
          <Badge bg="info">
            <BiCategoryAlt/>{categoria}
          </Badge>{' '}
          {/* <p><CgNametag/>{nombre}</p> */}
          {/* <p><AiFillHeart/>{vida}</p> */}
          {/* <p><FaWeightHanging/> {peso}</p> */}
          {/* <p><BiCategoryAlt/>{categoria}</p> */}
        </article>
      </div>
    </>
  );
}