import { Route, Routes } from 'react-router-dom'
import './App.css';
import Header from './componentes/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
/*Rutas*/
import Main from './routes/Main' 
import TemplateCategorias from './routes/TemplateCategorias';
import TemplatePokemones from './routes/TemplatePokemones'
// import Footer from './componentes/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<div><h1>Estas en</h1>
        <p>No se donde</p></div>} />
        <Route Sensitive={false} path={`categorias/:nombre_categoria`} element={<TemplateCategorias/>}/>
        <Route Sensitive={false} path={'pokemones/:nombre'} element={<TemplatePokemones/>}/>
        {/*Buscar formas de no usar esto*/}
        <Route Sensitive={false} path={'categorias/:categoria/pokemones/:nombre'} element={<TemplatePokemones/>}/>
        <Route path='*' element={<h1>Error 404</h1>} />

      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
/**
 * Mejorar links de categoria
 * agregar footer
 * poner titulo para la lo generado
 */