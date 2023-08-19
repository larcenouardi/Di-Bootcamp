import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [task, setTask] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo({
      task,
      completed: false
    });
    setTask('');
  };

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Task:
        <input type="text" value={task} onChange={handleChange} />
      </label>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TodoForm;