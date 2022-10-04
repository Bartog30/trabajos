import logo from './logo.svg';
import './App.css';
import Menu from './Menu';
import Artistas from './Artistas';
import iniciopagina from './paginas/iniciopagina';

import {Routes, Route, BrowserRouter as Router} from "react-router-dom";


function App() {
  return (
    <>
    <Menu/>
    <div className="container pt-4 mt-5">
    <Router>
        <Routes>
          <Route path="/" element={<iniciopagina/>}/>
          <Route path="/contacto" element={<contactopagina/>}/>
          <Route path="/artistas" element={<artistaspagina/>}/>
        </Routes>
      </Router>
      
      <Artistas nombre="Coldplay" img="/img/Coldplay.jpg" descripcion="Lipson"/>
      <Artistas nombre="Jack Johnson" img="/img/jack.jpg" descripcion="Buenaso tranqui"/>
      <Artistas nombre="John Mayer" img="/img/john.jpg" descripcion="Lipson"/>
      
    </div>
    </>
  );
}

export default App;
