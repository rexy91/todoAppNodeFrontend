import React from 'react';
import './App.css';
import TodoContainer from './Components/TodoContainer' 
import TodoForm from './Components/TodoForm'

function App() {
  return (
    <div className="App">
        <TodoForm/>
        <TodoContainer/>
    </div>
  );
}

export default App;
