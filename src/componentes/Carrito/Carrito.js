import './Carrito.css';

import { FaCartPlus } from "react-icons/fa";

function Carrito(){
//const [carrito,setCarrito]=useState(0);

return(
           
        <div className='carrito-total'>

        {< FaCartPlus  className="App-logo"   />}  
           <p>$0  </p>
        </div>

    );

}
export default  Carrito;