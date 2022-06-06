import Backdrop from "./Backdrop";
import Modal from "./Modal";
import { useState } from "react";

function Todo(props) {
  const [openModal, setOpenModal] = useState(false);

  function deleteHandler() {
    setOpenModal(true);
  }

  function closeModalHandler() {
    setOpenModal(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        {/* Do not add paranthesis to deleteHandler with onClick or else it will
        execute on loading of JS */}
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {openModal && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
      {openModal && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
}

export default Todo;
