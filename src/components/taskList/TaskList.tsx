import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/store/store';
import TaskItem from '../taskItems/TaskItem';

const TaskList: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  return (
    <div className="border rounded p-4">
      {tasks.map((task) => (
        <TaskItem key={task.id} id={task.id} title={task.title} completed={task.completed} />
      ))}
    </div>
  );
};

export default TaskList;
