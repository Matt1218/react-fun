function Todo(props) {
  function deleteHandler() {
      
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        {/* Do not add paranthesis to deleteHandler with onClick or else it will
        execute on loading of JS */}
        <button className="btn" onClick={deleteHandler}>Delete</button>
      </div>
    </div>
  );
}

export default Todo;
