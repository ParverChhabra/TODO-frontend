// import React, { useState, useEffect } from 'react';
// import TodoItem from './TodoItem';
// import TodoForm from './TodoForm';
// import './TodoList.css';

// function TodoList() {
//   const [todos, setTodos] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState('');
//   const [sortBy, setSortBy] = useState('createdAt');
//   const [sortOrder, setSortOrder] = useState('DESC');

//   useEffect(() => {
//     setLoading(true);
//     const params = new URLSearchParams();
//     if (search) params.append('search', search);
//     if (sortBy) params.append('sortBy', sortBy);
//     if (sortOrder) params.append('sortOrder', sortOrder);

//     fetch(`http://localhost:3000/api/todos?${params.toString()}`)
//       .then(res => res.json())
//       .then(data => {
//         setTodos(data);
//         setLoading(false);
//       })
//       .catch(() => setLoading(false));
//   }, [search, sortBy, sortOrder]);

//   const handleTodoCreated = (newTodo) => {
//     setTodos(prev => [newTodo, ...prev]);
//   };

//   const handleToggleStatus = (id, currentStatus) => {
//     const newStatus = currentStatus === 'Todo' ? 'Done' : 'Todo';
//     fetch(`http://localhost:3000/api/todos/${id}`, {
//       method: 'PUT',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ status: newStatus })
//     })
//       .then(res => res.json())
//       .then(updatedTodo => {
//         setTodos(prev =>
//           prev.map(todo =>
//             todo.id === id
//               ? { ...todo, status: updatedTodo.status, updatedAt: updatedTodo.updatedAt }
//               : todo
//           )
//         );
//       })
//       .catch(() => alert('Failed to update status'));
//   };

//   const handleDeleteTodo = (id) => {
//     if (window.confirm('Are you sure you want to delete this todo?')) {
//       fetch(`http://localhost:3000/api/todos/${id}`, {
//         method: 'DELETE'
//       })
//         .then(res => {
//           if (res.ok) {
//             setTodos(prev => prev.filter(todo => todo.id !== id));
//           } else {
//             alert('Failed to delete todo');
//           }
//         })
//         .catch(() => alert('Failed to delete todo'));
//     }
//   };

//   if (loading) return <div>Loading...</div>;

//   return (
//     <div className="todo-container">
//       <h2 className="todo-heading">Your Tasks</h2>
//       <div className="todo-controls">
//   <input
//     type="text"
//     placeholder="Search by title..."
//     value={search}
//     onChange={e => setSearch(e.target.value)}
//     className="search-input"
//   />
//   <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="sort-select">
//     <option value="createdAt">Sort by Created Date</option>
//     <option value="updatedAt">Sort by Updated Date</option>
//   </select>
//   <select value={sortOrder} onChange={e => setSortOrder(e.target.value)} className="sort-select">
//     <option value="DESC">Newest First</option>
//     <option value="ASC">Oldest First</option>
//   </select>
// </div>

//       <TodoForm onTodoCreated={handleTodoCreated} />
//       <div className="todo-list rounded-md grid ">
//         {todos.map(todo => (
//        <TodoItem
//          key={todo.id}
//          todo={todo}
//          onToggle={handleToggleStatus}
//          onDelete={handleDeleteTodo}
//        />
//          ))}
//         </div>

//       </div>

//   );
// }

// export default TodoList;

//   useEffect(() => {

//     fetch('http://localhost:3000/api/todos')
//       .then(res => res.json())
//       .then(data => {
//         setTodos(data);
//         setLoading(false);
//       })
//       .catch(() => setLoading(false));
//   }, []);

// export default TodoList;
// import React, { useState } from 'react';
// import { TodoStatus } from '../../Types/Todo';
// import TodoItem from './TodoItem';
// import './TodoList.css';

// function TodoList() {
//   const [todos, setTodos] = useState([
//     {
//       id: 1,
//       title: "Learn React.js",
//       description: "Complete the React.js tutorial and build components",
//       status: TodoStatus.TODO,
//       createdAt: new Date('2025-07-08T10:00:00'),
//       updatedAt: new Date('2025-07-08T10:00:00')
//     },
//     {
//       id: 2,
//       title: "Set up TypeORM",
//       description: "Configure database connection and create entities",
//       status: TodoStatus.DONE,
//       createdAt: new Date('2025-07-07T14:30:00'),
//       updatedAt: new Date('2025-07-08T09:15:00')
//     },
//     {
//       id: 3,
//       title: "Build Todo UI",
//       description: "Create React components for todo management",
//       status: TodoStatus.TODO,
//       createdAt: new Date('2025-07-08T11:00:00'),
//       updatedAt: new Date('2025-07-08T11:00:00')
//     }
//   ]);

//   const toggleTodoStatus = (id, currentStatus) => {
//     setTodos(prevTodos =>
//       prevTodos.map(todo =>
//         todo.id === id
//           ? {
//               ...todo,
//               status: currentStatus === TodoStatus.TODO ? TodoStatus.DONE : TodoStatus.TODO,
//               updatedAt: new Date()
//             }
//           : todo
//       )
//     );
//   };

//   const deleteTodo = (id) => {
//     if (window.confirm('Are you sure you want to delete this todo?')) {
//       setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
//     }
//   };

//   if (todos.length === 0) {
//     return (
//       <div className="todo-container">
//         <h2 className="todo-heading">Your Tasks</h2>
//         <div className="empty-state">
//           <p>No todos yet. Add your first task!</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="todo-container">
//       <h2 className="todo-heading">Your Tasks</h2>
//       <div className="todo-list">
//         {todos.map(todo => (
//           <TodoItem
//             key={todo.id}
//             todo={todo}
//             onToggle={toggleTodoStatus}
//             onDelete={deleteTodo}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import { FaFilter } from "react-icons/fa";

const apiUrl = process.env.REACT_APP_API_URL;

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("createdAt");
  const [sortOrder, setSortOrder] = useState("DESC");
  const [statusFilter, setStatusFilter] = useState("all");
  const [showFilterMenu, setShowFilterMenu] = useState(false);

  const handleSearch = (value) => {
    setSearch(value);
    setLoading(true);
    fetch(`${apiUrl}/api/todos?search=${value}`)
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => {
    setLoading(true);
    const params = new URLSearchParams();
    if (search) params.append("search", search);
    if (sortBy) params.append("sortBy", sortBy);
    if (sortOrder) params.append("sortOrder", sortOrder);

    fetch(`${apiUrl}/api/todos?${params.toString()}`)
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [sortBy, sortOrder, search]);

  const handleTodoCreated = (newTodo) => {
    setTodos((prev) => [newTodo, ...prev]);
  };

  const handleToggleStatus = (id, currentStatus) => {
    const newStatus = currentStatus === "Todo" ? "Done" : "Todo";
    fetch(`${apiUrl}/api/todos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: newStatus }),
    })
      .then((res) => res.json())
      .then((updatedTodo) => {
        setTodos((prev) =>
          prev.map((todo) =>
            todo.id === id
              ? {
                  ...todo,
                  status: updatedTodo.status,
                  updatedAt: updatedTodo.updatedAt,
                }
              : todo
          )
        );
      })
      .catch(() => alert("Failed to update status"));
  };

  const handleDeleteTodo = (id) => {
    if (window.confirm("Are you sure you want to delete this todo?")) {
      fetch(`${apiUrl}/api/todos/${id}`, {
        method: "DELETE",
      })
        .then((res) => {
          if (res.ok) {
            setTodos((prev) => prev.filter((todo) => todo.id !== id));
          } else {
            alert("Failed to delete todo");
          }
        })
        .catch(() => alert("Failed to delete todo"));
    }
  };

  const filteredTodos = todos.filter((todo) => {
    if (statusFilter === "all") return true;
    if (statusFilter === "done") return todo.status === "Done";
    if (statusFilter === "not_done") return todo.status !== "Done";
    return true;
  });

  if (loading)
    return <div className="text-center py-8 text-gray-500">Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
        Your Tasks
      </h2>
      <div className="flex flex-col md:flex-row gap-4 mb-6 items-center">
        <input
          type="text"
          placeholder="Search by title..."
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
          className="flex-1 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400"
        />
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="createdAt">Sort by Created Date</option>
          <option value="updatedAt">Sort by Updated Date</option>
        </select>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="DESC">Newest First</option>
          <option value="ASC">Oldest First</option>
        </select>
        <div className="relative">
          <button
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition"
            onClick={() => setShowFilterMenu((prev) => !prev)}
            aria-label="Filter"
            title="Filter"
            type="button"
          >
            <FaFilter className="text-gray-500 w-5 h-5" />
          </button>
          {showFilterMenu && (
            <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg z-10">
              <ul className="py-1">
                <li>
                  <button
                    className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${
                      statusFilter === "all" ? "font-bold" : ""
                    }`}
                    onClick={() => {
                      setStatusFilter("all");
                      setShowFilterMenu(false);
                    }}
                  >
                    All
                  </button>
                </li>
                <li>
                  <button
                    className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${
                      statusFilter === "done" ? "font-bold" : ""
                    }`}
                    onClick={() => {
                      setStatusFilter("done");
                      setShowFilterMenu(false);
                    }}
                  >
                    Done
                  </button>
                </li>
                <li>
                  <button
                    className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${
                      statusFilter === "not_done" ? "font-bold" : ""
                    }`}
                    onClick={() => {
                      setStatusFilter("not_done");
                      setShowFilterMenu(false);
                    }}
                  >
                    Not Done
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <TodoForm onTodoCreated={handleTodoCreated} />

      {filteredTodos.length === 0 ? (
        <div className="text-center p-12 text-gray-500 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300">
          <p className="text-lg">No todos yet. Add your first task!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={handleToggleStatus}
              onDelete={handleDeleteTodo}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default TodoList;
