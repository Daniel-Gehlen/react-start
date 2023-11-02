import React, { useState } from 'react';
import styles from './TaskApp.module.css'; // Importe o módulo CSS
import TaskForm from './TaskForm';
import TaskList from './TaskList';


function TaskApp() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
  };

  const toggleTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className={styles.TaskApp}> {/* Use a classe de estilo para o componente App */}
      <header className={styles.TaskHeader}> {/* Use a classe de estilo para o cabeçalho */}
        <h1>Task List</h1>
      </header>
      <main className={styles.TaskTitle}> {/* Use a classe de estilo para o conteúdo principal */}
        <TaskForm onAddTask={addTask} />
        <TaskList tasks={tasks} onToggleTask={toggleTask} onDeleteTask={deleteTask} />
      </main>
    </div>
  );
}

export default TaskApp;
