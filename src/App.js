import React, { Component } from 'react'
import './App.css';
import TodoContainer from './Components/TodoContainer' 
import TodoForm from './Components/TodoForm'
import {connect} from 'react-redux'
import {getAllTodos} from './Redux/actions'

export class App extends Component {
  
  componentDidMount(){
    fetch('http://localhost:3000/todos')
    .then(res => res.json())
    .then(todosArray => {
        this.props.getAllTodos(todosArray)
    })
  }
  render() {
    return (
      <div className="App">
        <div className='jumbotron jumbotron-fluid' id='header'>
          <div className='container'>
            <h2 className='display-4'>Welcome to Your Todo App</h2>
          </div>
        </div>
      <TodoForm/>
      <TodoContainer/>
  </div>
    )
  }
}



export default connect(null, {getAllTodos})(App);