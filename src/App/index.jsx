import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';

// const defaultTodos = [
//   {text: 'Cortar cebolla', completed: true},
//   {text: 'Tomar el curso de intro react', completed: false},
//   {text: 'Llorar con la llorona', completed: false},
//   {text: 'LALALALAA', completed: false},
// ];



function App() {
  

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  )

  
}

export default App
