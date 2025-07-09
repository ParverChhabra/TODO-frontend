import React, { useState } from 'react';

function TodoForm({ onTodoCreated }) {
  const [form, setForm] = useState({ title: '', description: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetch('http://localhost:3000/api/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
      .then(res => res.json())
      .then(newTodo => {
        onTodoCreated(newTodo);
        setForm({ title: '', description: '' });
      })
      .catch(() => alert('Error creating todo'));
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Title"
        required
      />
      <input
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Description"
        required
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default TodoForm;
