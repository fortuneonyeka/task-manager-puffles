import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTaskCompletion, deleteTask } from '../../Redux/features/tasksSlice';
import { FaDeleteLeft } from "react-icons/fa6";

interface TaskItemProps {
  id: number;
  title: string;
  completed: boolean;
}

const TaskItem: React.FC<TaskItemProps> = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between p-2 border-b ">
      <div>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => dispatch(toggleTaskCompletion(id))}
          className="mr-2 my-4"
        />
        <span className={completed ? 'line-through text-blue-500' : 'text-green-500 '}>{title}</span>
      </div>
      <button onClick={() => dispatch(deleteTask(id))} className="text-black text-4xl hover:bg-red-600 hover:text-white hover:px-3 py-2 rounded-md"><FaDeleteLeft /></button>
    </div>
  );
};

export default TaskItem;
