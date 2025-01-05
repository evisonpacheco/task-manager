import AddTask from "./components/AddTask";
import Task from "./components/Task";

function App() {
  return (
    <div>
      <div>
        <h1>Gerenciar Tarefas</h1>
        <AddTask />
        <Task />
      </div>
    </div>
  );
}

export default App;
