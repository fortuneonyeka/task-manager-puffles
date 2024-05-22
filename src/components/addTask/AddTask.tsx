import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../Redux/features/tasksSlice";

const AddTask: React.FC = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      dispatch(addTask(title));
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="px-2 py-3 border rounded w-full"
        placeholder="Add a new task"
      />
      <button
        type="submit"
        className="mt-2 px-8 py-2 bg-blue-500 text-white rounded hover:bg-green-500"
      >
        Add Task
      </button>
    </form>
  );
};

export default AddTask;
