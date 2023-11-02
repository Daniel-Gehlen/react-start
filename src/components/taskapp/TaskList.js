import React from 'react';
import Task from './Task';
import styles from './TaskList.module.css';

function TaskList({ tasks, onToggleTask, onDeleteTask }) {
  return (
    <ul className={styles.taskList}>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onToggle={onToggleTask}
          onDelete={onDeleteTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;
