import { useState } from "react";

function AddTask({ onClickAddTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <input
        type="text"
        placeholder="Adicionar Tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rouded-md"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        type="text"
        placeholder="Adicionar Descrição"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rouded-md"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        onClick={() => {
          onClickAddTask(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
