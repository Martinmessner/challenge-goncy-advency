import { useState, useEffect } from "react";
import { ListMapGifts } from "./InfoGifts";
import {  ModalAddItem } from "./AddModalItem"

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
    const [editDataGift, setEditDataGift] = useState(null)
   
    useEffect(() => {
        if (editDataGift) {
            setGift(editDataGift)
        } else {
            setGift(regalosBase)
        }
      }, [editDataGift])

    useEffect(() => {
        localStorage.setItem("info", JSON.stringify(info))
     }, [info]);


     
    const handlechange = (e) =>  {
        setGift({
            ...gift,
            [e.target.name]:e.target.value,
          });
    }

    const addData = (gift) => {
        gift.id = Date.now()
        setInfo([...info, gift])
      }
    
    const handleSubmit = (e) =>  {
        e.preventDefault();
        if (gift.regalos.trim() === "" || gift.cantidad < 1) { 
            alert("No has puesto ningun regalo o la cantidad es un numero invalido!")
            return;
        }

        if (gift.id === null) {
            addData(gift)
        } else {
            updateGift(gift)
        }
        setGift(regalosBase)
        setEditDataGift(null)
    }

    const updateGift = (data) => {
		setInfo(info.map(gift => gift.id === data.id ? data : gift));
        setEditDataGift(data)
        console.log(data)
	}

    const filterGift = (deleteInfo) => {
        setInfo(info.filter( (info) => info !== deleteInfo))
    }

    const deleteAllGifts = () => {
        setInfo(info.filter( (info) => !info))
    }

    return (
        <div className="app">

        <ListMapGifts deleteAllGifts={deleteAllGifts} filterGift={filterGift}  handleSubmit={handleSubmit} 
         updateGift={updateGift} handlechange={handlechange} gift={gift}  info={info} 
         />
        <ModalAddItem 
        setEditDataGift={setEditDataGift}
        handleSubmit={handleSubmit}
        updateGift={updateGift}
        handlechange={handlechange}
        gift={gift}
         />

        <button
         onClick={deleteAllGifts}>Borrar Todo</button>
                    
        </div>
        
    )
}

