import { useState, useEffect } from "react";
import { ModalAddItem } from "./Modal";

const regalosBase = {
    regalos : "",
    cantidad : "",
    destinatario: "",
    id : null,
    url : ""
}

const infoLocalStorage = JSON.parse(localStorage.getItem("info"));

export function Challenge ()  {
    const [info, setInfo] = useState(infoLocalStorage)
    const [gift, setGift] = useState(regalosBase)
   
    useEffect(() => {
        localStorage.setItem("info", JSON.stringify(info))
     }, [info]);

    const handlechange = (e) =>  {
        setGift({
            ...gift,
            [e.target.name]:e.target.value,
          });
    }
    
    const handleSubmit = (e) =>  {
        e.preventDefault();
        if (gift.regalos.trim() === "" || gift.cantidad < 1) { 
            alert("No has puesto ningun regalo o la cantidad es un numero invalido!")
            return;
        }
        if (gift.id === null) gift.id = Date.now();
        setInfo([...info, gift])
        setGift(regalosBase)
    }

    const filterGift = (deleteInfo) => {
        setInfo(info.filter( (info) => info !== deleteInfo))
    }

    const deleteAllGifts = () => {
        setInfo(info.filter( (info) => !info))
    }

    return (
        <div className="app">
         <h1>Lista de Regalos</h1>

                       { info.length > 0 ? (

                         info.map(el => (
                         <ul key={el.id}>  

        <li> 
                        <h2> { el.regalos } </h2>  
                       {`Cantidad: ${el.cantidad}`} 
                        <p> {el.destinatario} </p>
                       <img className="imagenagregada__enreact" alt="imagen" src={el.url}  />        
                       <button className="button__eliminar" onClick={() => filterGift(el)}>X</button>
        </li>
        
        </ul>
        )) ) :
        <div>
                    <h1>Agregue nuevos regalos</h1>
                    <h2> o sera una triste navidad 💔💔</h2>
        </div>
            }
                <div>
                <ModalAddItem handleSubmit={handleSubmit} handlechange={handlechange} gift={gift} />
                <button onClick={deleteAllGifts}>Borrar Todo</button>
                </div>
        </div>
        
    )
}

