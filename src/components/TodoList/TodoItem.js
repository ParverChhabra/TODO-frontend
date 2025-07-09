import React from 'react';

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div className={`todo-card ${todo.status === 'Done' ? 'done' : ''}`}>
      <div className="todo-content">
        <h3 className="todo-title">{todo.title}</h3>
        <p className="todo-description">{todo.description}</p>
        <div className="todo-meta">
          <span>Created: {new Date(todo.createdAt).toLocaleString()}</span>
          <span>Updated: {new Date(todo.updatedAt).toLocaleString()}</span>
        </div>
      </div>
      <div className="todo-actions">
        <span className={`status-badge ${todo.status === 'Done' ? 'done' : 'todo'}`}>
          {todo.status}
        </span>
        <button
          className={`toggle-btn ${todo.status === 'Todo' ? 'mark-done' : 'mark-todo'}`}
          onClick={() => onToggle(todo.id, todo.status)}
        >
          {todo.status === 'Todo' ? 'Mark Done' : 'Mark Todo'}
        </button>
        <button
          className="delete-btn"
          onClick={() => onDelete(todo.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;



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
