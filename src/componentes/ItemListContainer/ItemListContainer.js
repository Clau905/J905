import './ItemListContainer.css';

function ItemListContainer(props){


return(
           
        <div className='contenedor-list'>
                <h2>{props.mensaje}</h2>
        </div>

    );

}
export default  ItemListContainer;