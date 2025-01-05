import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar React",
      description: "Melhorar os conhecimentos em React",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Conseguir um Emprego",
      description: "Conseguir um emprego como programador",
      isCompleted: false,
    },
    {
      id: 3,
      title: "...",
      description: "...",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id == taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function onClickDeleteTask(taskId) {
    const newTasks = tasks.filter(task => task.id != taskId )
    setTasks(newTasks);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciar Tarefas
        </h1>
        <AddTask />
        <Tasks tasks={tasks} onTaskClick={onTaskClick} onClickDeleteTask={onClickDeleteTask} />
      </div>
    </div>
  );
}

export default App;
