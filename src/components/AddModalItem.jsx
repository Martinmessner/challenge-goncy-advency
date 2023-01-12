import { useState } from 'react';

function Modal({ isOpen, onRequestClose, children }) {
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

export function ModalAddItem({handleSubmit, handlechange, gift, editDataGift}) {
  const [modalIsOpen, setIsOpen] = useState(false);

  return (

    <div>

       <button onClick={() => setIsOpen(true)}>{editDataGift ? "Editar Regalo" : "Agregar Regalo"}</button>

      <Modal isOpen={modalIsOpen} onRequestClose={() => setIsOpen(false)}>

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

                <button className='modal__form--input' type="submit">Agregar Regalos</button>
            </form>
      </Modal>
    </div>
  );
}
