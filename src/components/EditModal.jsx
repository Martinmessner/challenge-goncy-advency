import { useState } from "react";

function EditModal({ isOpen, onRequestClose, children }) {
    if (!isOpen) {
      return null;
    }
  
  return (
    
    <div className="modal__overlay">
      <div className="modal__content">
           {children}
        <button onClick={onRequestClose}>Cerrar</button>
      </div>
    </div>
  );
  }
  
  export function EdiItem({handleSubmit, handlechange, gift, info}) {
    const [modalIsOpen, setIsOpen] = useState(false);
  
    return (
  
      <div>
  
         <button onClick={() => setIsOpen(true)}>Editar Regalos</button>
  
        <EditModal isOpen={modalIsOpen} onRequestClose={() => setIsOpen(false)}>
  
            <form className='modal__form' onSubmit={handleSubmit}>
  
                  <input className='modal__form--input' name="regalos" 
                  value={gift.regalos} onChange={handlechange} type="text" 
                  autoComplete='off' placeholder='Regalo'></input>
  
                  <input className='modal__form--input' name="cantidad" 
                  autoComplete='off' type="number" value={gift.cantidad} 
                  onChange={handlechange} placeholder="Cantidad"  />
  
                  <input className='modal__form--input' name="destinatario" 
                  autoComplete='off' type="text" value={gift.destinatario} onChange={handlechange} placeholder="Destinatario"  />
  
                  <input className='modal__form--input' name="url" value={gift.url}
                   onChange={handlechange} type="url" placeholder="URL de Imagen"/>
  
                  <button className='modal__form--input' type="submit">Aplicar Regalos</button>
              </form>
        </EditModal>
      </div>
    );
  }
  

  /*
  
  const EditModal = ({ handleClose, openEdit, gift, info, handleEdit, idToEdit }) => {

    const [id, setId] = useState(0)

    const [changedName, setChangedName] = useState('')
    const [changedThumbnail, setChangedThumbnail] = useState('')
    const [changedQuantity, setChangedQuantity] = useState('')
    

    const handleEditGift = () => {
        handleEdit(id, changedName, changedThumbnail, changedQuantity)
        handleClose()
    }

    useEffect(() => {
        const giftToEdit = info.find(infos => infos.id === idToEdit)

        setChangedName(giftToEdit.regalos)
        setChangedThumbnail(giftToEdit.url)
        setChangedQuantity(giftToEdit.cantidad)
        setId(giftToEdit.id)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div open={openEdit} onClose={handleClose}>
            <p>Modificar "{changedName}"</p>
            <div>
                <form className='add-product-form'>
                    <p value={changedName} label="Nombre del regalo" onChange={(e) => setChangedName(e.target.value)} variant="standard" required />
                    <p value={changedThumbnail} type="url" label="Url de imagen" onChange={(e) => setChangedThumbnail(e.target.value)} variant="standard" required />
                    <p value={changedQuantity} type="number" label="Cantidad" onChange={(e) => setChangedQuantity(e.target.value)} variant="standard" required />
                    <p value={cangedPrice} type="number" label="Precio" onChange={(e) => setChangedPrice(e.target.value)} variant="standard" required />
                    <p value={changedGiftReceiver} label="Para quien es?" onChange={(e) => setChangedGiftReceiver(e.target.value)} variant="standard" required />
                </form>
            </div>
            <div>
                <button variant='text' onClick={handleEditGift}>Aplicar cambios</button>
                <button variant='text' onClick={handleClose}>Cancelar</button>
            </div>
        </div>
    )
}   
  */