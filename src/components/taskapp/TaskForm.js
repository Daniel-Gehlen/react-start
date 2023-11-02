import React, { useState } from 'react';
import styles from './TaskForm.module.css'

function TaskForm({ onAddTask }) {
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask) {
      onAddTask(newTask);
      setNewTask('');
    }
  };

  return (
    <div>
      <input
        className={styles['task-input']} 
        type="text"
        placeholder="Add task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button className={styles['add-task-button']} onClick={addTask}>
        Add task
      </button>
    </div>
  );
}

export default TaskForm;
