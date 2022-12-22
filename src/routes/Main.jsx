import SideBar from '../componentes/SideBar'
import PokeGaleria from '../componentes/PokeGaleria'

const estilo = {
  gap: "12px",
  height: "100vh"

}
export default function Main(){
  return(
    <main className='row' style={estilo}>
      <div className='col-12 col-md-2'>
        <SideBar/>
      </div>
      <div className='col-12 col-md-9'>
        <PokeGaleria/>
      </div>
    </main>
  );
}