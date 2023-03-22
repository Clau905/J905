
import './App.css';

import Minav from './componentes/Minav.js';
function App() {
  return (
    <div className='App'>
      <div className='cabecera'>
        <h2>Bienvenidos a mi E-commerce</h2>
      </div>
      <div className='nav-superior'>
          <Minav></Minav>
      </div>
      <div className='contenido'>
        <div className='contenido-izquierdo'>
                    
        </div>
        <div className='contenedor-cuerpo-cards'>
  
        </div>
   
      </div>
      <div className='footer'></div>
    </div>
 
 
  );
}

export default App;
