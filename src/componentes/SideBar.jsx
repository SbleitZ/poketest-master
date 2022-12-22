
import { Link } from 'react-router-dom';
import '../css/SideBar.css'
function SideBar(){

  return(
    <div className='SideBar-container'>
      <h2 className='SideBar-title'>Categorias</h2>
      <ul className='SideBar-main-lista'>
        <li><Link to="/categorias/fire">Fire</Link></li>
        <li><Link to="/categorias/Water">Water</Link></li>
        <li><Link to="/categorias/grass">Grass</Link></li>
        <li><Link to="/categorias/psychic">psychic</Link></li>
        <li><Link to="/categorias/Electric">Electric</Link></li>
        <li><Link to="/categorias/Bug">Bug</Link></li>
        <li><Link to="/categorias/Normal">Normal</Link></li>
        <li><Link to="/categorias/Poison">Poison</Link></li>
        <li><Link to="/categorias/Dragon">Dragon</Link></li>
        
      </ul>
    </div>
  );
}
export default SideBar;

