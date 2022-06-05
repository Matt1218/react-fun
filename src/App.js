import Backdrop from "./Components/Backdrop";
import Modal from "./Components/Modal";
import Todo from "./Components/Todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="1" />
      <Todo text="2" />
      <Todo text="3" />
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
