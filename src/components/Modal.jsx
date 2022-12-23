import { useState } from 'react';

function Modal({ isOpen, onRequestClose, children }) {
  if (!isOpen) {
    return null;
  }

return (
  <div className="modal-overlay">
    <div className="modal-content">
         {children}
      <button onClick={onRequestClose}>Cerrar</button>
    </div>
  </div>
);
}

export function ModalAddItem({handleSubmit, handlechange, gift}) {
  const [modalIsOpen, setIsOpen] = useState(false);

  return (
    <div>
       <button onClick={() => setIsOpen(true)}>Agregar Regalos</button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setIsOpen(false)}>
          <form onSubmit={handleSubmit}>
                <input name="regalos" value={gift.regalos} onChange={handlechange} type="text" autoComplete='off' placeholder='Regalo'></input>
                <input className="input__cantidad" name="cantidad" autoComplete='off' type="number" value={gift.cantidad} onChange={handlechange} placeholder="Cantidad"  />
                <input name="url" value={gift.url} onChange={handlechange} type="url" placeholder="URL de Imagen"/>
                <button type="submit">Agregar Regalos</button>
            </form>
             
      </Modal>
    </div>
  );
}