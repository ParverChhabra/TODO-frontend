// import React, { useState } from 'react';

// function TodoForm({ onTodoCreated }) {
//   const [form, setForm] = useState({ title: '', description: '' });

//   const handleChange = e => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     fetch('http://localhost:3000/api/todos', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(form)
//     })
//       .then(res => res.json())
//       .then(newTodo => {
//         onTodoCreated(newTodo);
//         setForm({ title: '', description: '' });
//       })
//       .catch(() => alert('Error creating todo'));
//   };

//   return (
//     <form onSubmit={handleSubmit} className="todo-form">
//       <input
//         name="title"
//         value={form.title}
//         onChange={handleChange}
//         placeholder="Title"
//         required
//       />
//       <input
//         name="description"
//         value={form.description}
//         onChange={handleChange}
//         placeholder="Description"
//         required
//       />
//       <button type="submit">Add Todo</button>
//     </form>
//   );
// }

// export default TodoForm;


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
    <form className="flex flex-col md:flex-row gap-4 mb-6" onSubmit={handleSubmit}>
      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Title"
        required
        className="flex-1 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400"
      />
      <input
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Description"
        required
        className="flex-1 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 font-semibold"
      >
        Add Todo
      </button>
    </form>
  );
}

export default TodoForm;

