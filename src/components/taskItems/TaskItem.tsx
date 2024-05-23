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
    <div className="relative flex items-center justify-between p-2 border-b">
      <div className="relative">
        <span
          className={`absolute bottom-5 right-0 text-xs font-semibold ${completed ? 'text-red-500' : 'text-yellow-500'}`}
        >
          {completed ? 'done' : 'active'}
        </span>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => dispatch(toggleTaskCompletion(id))}
          className="mr-2"
        />
        <span
          className={
            completed ? 'line-through text-blue-500' : 'text-green-500'
          }
        >
          {title}
        </span>
      </div>
      <button
        onClick={() => dispatch(deleteTask(id))}
        className="text-black text-4xl hover:bg-red-600 hover:text-white hover:px-3 py-2 rounded-md"
      >
        <FaDeleteLeft />
      </button>
    </div>
  );
};

export default TaskItem;
