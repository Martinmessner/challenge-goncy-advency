import { useState, useEffect } from "react";
import { ModalAddItem } from "./Modal";

const regalosBase = {
    regalos : "",
    cantidad : "",
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
        if (gift.regalos.trim() === "" || gift.cantidad === "") { 
            alert("Completa el campo para poder agregar regalos")
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
        <ul>  

        <li key={el.id} > <h2> { el.regalos } </h2>  {`Cantidad: ${el.cantidad}`} 
         <img className="imagenagregada__enreact" alt="imagen" src={el.url}  />        
        <button className="button__eliminar" onClick={() => filterGift(el)}>X</button>
        </li>
        
        </ul>
        )) ) :
        <div>
                    <h1>Agregue nuevos regalos</h1>
        </div>
            }
        
           
                <div>
                <ModalAddItem handleSubmit={handleSubmit} handlechange={handlechange} deleteAllGifts={deleteAllGifts} gift={gift} />
                </div>
        </div>
        
    )
}

