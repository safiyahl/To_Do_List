import "./App.css";
import { TodoForm } from "./components/TodoForm";
import { TodoWrapper } from "./components/TodoWrapper";
import { EditTodoForm } from "./components/EditTodoForm";

function App() {
  return (
    <div className="App">
      <h1 className = "heading"> To Do List </h1>
      <TodoWrapper />
     
    </div>
  );
}

export default App;
