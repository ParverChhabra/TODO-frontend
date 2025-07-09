import React from 'react';

// function Header() {
//   return (
//     <header style={{
//       backgroundColor: '#f8f9fa',
//       padding: '1rem',
//       borderBottom: '1px solidrgb(192, 137, 28)',
//       textAlign: 'center'
//     }}>
//       <h1 style={{ margin: 0, color: '#343a40', fontSize: '5.5rem' }}>Faaltu Todo</h1>
//       <p style={{ margin: '0.5rem 0 0 0', color: '#6c757d',fontSize: '3.5rem' }}>
//         TODO TODO TODO
//       </p>
//     </header>
//   );
// }

// export default Header;

function Header() {
  return (
    <header className="bg-orange-500 p-6  text-center shadow-md">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-wide">
        Todo App
      </h1>
      <p className="text-lg text-white">
        Manage your tasks efficiently
      </p>
    </header>
  );
}



// function Header() {
//     return (
//       <header className=" bg-orange-400 p-6 text-center shadow-md">
        
//         <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-wide">
//           Todo App
//         </h1>
//         <p className="text-xl text-blue-100 text-center flex-auto">
//           Todo Todo Todo 
//         </p>
//       </header>
//     );
//   }
  export default Header;


  