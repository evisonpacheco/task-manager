import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 } from "uuid";
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

  function onClickCompleteTask(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id == taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function onClickDeleteTask(taskId) {
    const newTasks = tasks.filter((task) => task.id != taskId);
    setTasks(newTasks);
  }

  function onClickAddTask(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciar Tarefas
        </h1>
        <AddTask onClickAddTask={onClickAddTask} />
        <Tasks
          tasks={tasks}
          onClickCompleteTask={onClickCompleteTask}
          onClickDeleteTask={onClickDeleteTask}
        />
      </div>
    </div>
  );
}

export default App;
