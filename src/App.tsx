import React from "react";
import AddTask from "./components/addTask/AddTask";
import TaskList from "./components/taskList/TaskList";

const App: React.FC = () => {
  return (
    <div className="container mx-auto mt-8 p-4 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
      <h1 className="text-2xl font-bold mb-4">Task Management Application</h1>
      <div className="my-12">
        <AddTask />
        <TaskList />
      </div>
    </div>
  );
};

export default App;
