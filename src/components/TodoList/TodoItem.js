// import React from 'react';

// function TodoItem({ todo, onToggle, onDelete }) {
//   return (
//     <div className={`todo-card ${todo.status === 'Done' ? 'done' : ''}`}>
//       <div className="todo-content">
//         <h3 className="todo-title">{todo.title}</h3>
//         <p className="todo-description">{todo.description}</p>
//         <div className="todo-meta">
//           <span>Created: {new Date(todo.createdAt).toLocaleString()}</span>
//           <span>Updated: {new Date(todo.updatedAt).toLocaleString()}</span>
//         </div>
//       </div>
//       <div className="todo-actions">
//         <span className={`status-badge ${todo.status === 'Done' ? 'done' : 'todo'}`}>
//           {todo.status}
//         </span>
//         <button
//           className={`toggle-btn ${todo.status === 'Todo' ? 'mark-done' : 'mark-todo'}`}
//           onClick={() => onToggle(todo.id, todo.status)}
//         >
//           {todo.status === 'Todo' ? 'Mark Done' : 'Mark Todo'}
//         </button>
//         <button
//           className="delete-btn"
//           onClick={() => onDelete(todo.id)}
//         >
//           Delete
//         </button>
//       </div>
//     </div>
//   );
// }

// export default TodoItem;



// import React from 'react';




// import { TodoStatus } from '../../Types/Todo';
// import { formatDate } from '../../utils/Date';

// function TodoItem({ todo, onToggle, onDelete }) {
//   return (
//     <div className={`todo-card ${todo.status === TodoStatus.DONE ? 'done' : ''}`}>
//       <div className="todo-content">
//         <h3 className="todo-title">{todo.title}</h3>
//         <p className="todo-description">{todo.description}</p>
//         <div className="todo-meta">
//           <span>Created: {formatDate(todo.createdAt)}</span>
//           <span>Updated: {formatDate(todo.updatedAt)}</span>
//         </div>
//       </div>
//       <div className="todo-actions">
//         <span className={`status-badge ${todo.status === TodoStatus.DONE ? 'done' : 'todo'}`}>
//           {todo.status}
//         </span>
//         <button
//           className={`toggle-btn ${todo.status === TodoStatus.TODO ? 'mark-done' : 'mark-todo'}`}
//           onClick={() => onToggle(todo.id, todo.status)}
//         >
//           {todo.status === TodoStatus.TODO ? 'Mark Done' : 'Mark Todo'}
//         </button>
//         <button
//           className="delete-btn"
//           onClick={() => onDelete(todo.id)}
//         >
//           Delete
//         </button>
//       </div>
//     </div>
//   );
// }

// export default TodoItem;

import React from 'react';

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div className="bg-white rounded-lg shadow p-6 flex flex-col md:flex-row md:items-center gap-4">
      <div className="flex-1">
        <h3 className={`text-xl font-bold mb-2 ${todo.status === 'Done' ? 'text-gray-400 line-through' : 'text-gray-800'}`}>
          {todo.title}
        </h3>
        <p className="text-gray-500">{todo.description}</p>
        <div className="text-xs text-slate-800 mt-2 flex gap-4">
          <span>Created: {new Date(todo.createdAt).toLocaleString()}</span>
          <span>Updated: {new Date(todo.updatedAt).toLocaleString()}</span>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-2 items-end md:items-center">
        <span className={`px-3 py-1 rounded-full text-xs font-semibold 
          ${todo.status === 'Done' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
          {todo.status}
        </span>
        <button
  className={`w-8 h-8 flex items-center justify-center rounded-full border-2 transition-colors duration-200
    ${todo.status === 'Done'
      ? 'bg-green-500 border-green-500'
      : 'bg-white border-gray-300 hover:border-green-400'
    }`}
  onClick={() => onToggle(todo.id, todo.status)}
  aria-label={todo.status === 'Done' ? "Mark as Todo" : "Mark as Done"}
>
  {todo.status === 'Done' && (
    <svg
      className="w-5 h-5 text-white"
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )}
</button>
        <button
          className="bg-orange-500 text-white px-3 py-1 rounded-full font-semibold hover:bg-red-700"
          onClick={() => onDelete(todo.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
