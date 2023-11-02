import React from 'react';
import styles from './Task.module.css'; // Importe o módulo CSS

function Task({ task, onToggle, onDelete }) {
  const { id, text, completed } = task;

  return (
    <li className={styles.task}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => onToggle(id)}
      />
      <span className={completed ? styles.completed : ''}>{text}</span>
      <button className={styles.deleteButton} onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
}

export default Task;
