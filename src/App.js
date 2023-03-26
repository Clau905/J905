
import './App.css';

import Minav from './componentes/Nav/Minav.js';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer.js';
import Carrito from './componentes/Carrito/Carrito.js';
function App() {

const opciones=['Home','Quienes Somos','Contacto'];


  return (
    <div className='App'>
      <div className='cabecera'>
        <h2>Bienvenidos a mi E-commerce</h2>
      </div>
      <div className='nav-superior'>
        
         <Minav op = {opciones}  /> 
         <Carrito></Carrito>
      </div>
      <br/>

      <ItemListContainer mensaje = 'Te ves bien, te sientes bien...'> </ItemListContainer>
         
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
