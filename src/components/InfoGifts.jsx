import CrossIcon from "../images/Iconsvg";
import EditNote from "../images/EditGiftIcon"

export const ListMapGifts = ({info, updateGift, filterGift, setEditDataGift}) => {

    return (

            <div className="app">
             <h1>Lista de Regalos</h1>
    
                { info.length > 0 ? (
    
                 info.map(el => (
                 <ul key={el.id}>  
    
            <li className="li__regalos"> 
    
            <img className="imagenagregada__enreact" alt="imagen" src={el.url}/>
                           <p>{ el.regalos }</p>
                           <p>{`Cantidad: ${el.cantidad}`}</p> 
                           <p>{el.destinatario}</p>
                     <div>
                           <button className="button__eliminar" onClick={() => filterGift(el)}><CrossIcon /></button>
                           <button className="button__eliminar" onClick={() => updateGift(el)}> <EditNote /> </button> 
                           
                    </div>
            </li>
            
            </ul>
            )) ) :
            <div>
                                          <h1>Agregue nuevos regalos</h1>
                                          <h2> o sera una triste navidad 💔💔</h2>
            </div>
                }
                   
            </div>
            
        
    )
}