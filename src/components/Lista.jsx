import { useState, useEffect } from "react";

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

    <ul>  
         { info.length > 0 ? (

         info.map(el => (
        <li key={el.id} >  { el.regalos } {`Cantidad: ${el.cantidad}`} 
              <img className="imagenagregada__enreact" alt="imagen" src={el.url}  />        
        <button className="button__eliminar" onClick={() => filterGift(el)}>X</button>
        </li>
          
        )) ) :
     <div>
                <h1>Agregue nuevos regalos</h1>
     </div>
        }
    </ul>
        
            <form onSubmit={handleSubmit}>
                <input name="regalos" value={gift.regalos} onChange={handlechange} type="text"></input>
                <input className="input__cantidad" name="cantidad" type="number" value={gift.cantidad} onChange={handlechange} placeholder="Cantidad"  />
                <input name="url" value={gift.url} onChange={handlechange} type="url" placeholder="https://example.com"/>
                <button type="submit">Agregar Regalos</button>
            </form>
                <button onClick={deleteAllGifts}>Borrar Todo</button>
        </div>
        
    )
}

/* 

import { useState } from "react";


const regalosBase = {
    regalos : "",
    cantidad : ""
}

export function Challenge ()  {
    const [info, setInfo] = useState(["xd"])
    const [gift, setGift] = useState(regalosBase)
   

    const handlechange = (e) =>  {
        setGift(e.target.value)
    }

    const handleSubmit = (e) =>  {
        e.preventDefault();
        if (gift.trim() === "") { 
            alert("Completa el campo para poder agregar regalos")
            return;
        }
        setInfo([...info, gift])
        setGift('');
    }

    const filterGift = (deleteInfo) => {
        setInfo(info.filter( (info) => info !== deleteInfo))
    }

    const deleteAllGifts = () => {
        setInfo(info.filter( (info) => !info))
    }

    return (
        <div className="app">
         <h1>Regalos</h1>

    <ul>  
         { info.length > 0 ? (

         info.map(el => (
        <li key={el} > { el}
        <button onClick={() => filterGift(el)}>X</button>
        </li>
          
        )) ) :
     <div>
                <h1>Agregue nuevos regalos</h1>
     </div>
        }
    </ul>

            <form onSubmit={handleSubmit}>
                <input name="gift" value={info.regalos} onChange={handlechange} type="text"></input>
                <input name="cantidad" type="text" value={info.cantidad} onChange={handlechange}   />
                <button type="submit">Agregar Regalos</button>
            </form>
                <button onClick={deleteAllGifts}>Eliminar todos los regalos</button>
        </div>
    )
}







*/