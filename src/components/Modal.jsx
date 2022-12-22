import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement("#root");

export function ModalAddItem({handleSubmit, handlechange, deleteAllGifts, gift}) {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={setIsOpen}
      >
        <h2>Hello</h2>
        <button onClick={() => setIsOpen(false)}>close</button>
          <form onSubmit={handleSubmit}>
                <input name="regalos" value={gift.regalos} onChange={handlechange} type="text"></input>
                <input className="input__cantidad" name="cantidad" type="number" value={gift.cantidad} onChange={handlechange} placeholder="Cantidad"  />
                <input name="url" value={gift.url} onChange={handlechange} type="url" placeholder="https://example.jpeg o PNG"/>
                <button type="submit">Agregar Regalos</button>
            </form>
                <button onClick={deleteAllGifts}>Borrar Todo</button>
        
      </Modal>
    </div>
  );
}