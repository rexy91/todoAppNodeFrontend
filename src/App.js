import React, { Component } from 'react'
import './App.css';
import TodoContainer from './Components/TodoContainer' 
import TodoForm from './Components/TodoForm'
export class App extends Component {
  
  componentDidMount(){
    fetch('http://localhost:3000/todos')
    .then(res => res.json())
    .then(console.log)
  }
  render() {
    return (
      <div className="App">
      <TodoForm/>
      <TodoContainer/>
  </div>
    )
  }
}


export default App; 