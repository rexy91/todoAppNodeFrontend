import React, { Component } from 'react'
import {connect} from 'react-redux'  
import {deleteOneTodo} from '../Redux/actions'

export class TodoCard extends Component {

    state={
        toggleCompleted: false
    }
    
    changeCompletedStatus = () => {
        this.setState({
            toggleCompleted: !this.state.toggleCompleted
        })
    }
    
    deleteTodo = () =>{
        fetch(`http://localhost:3000/todos/${this.props.todo._id}`, {
            method:'DELETE',
        })
        .then(res => res.json())
        .then(() => {
                                                    // The ones that doesn't match will be kept in new array. 
            const updatedArray = this.props?.todos?.todos?.filter(todo => todo._id != this.props?.todo?._id)
            this.props.deleteOneTodo(updatedArray)
        })
    } 

    crossTodoItem = () => {
        return this.state.toggleCompleted ? 'line-through red' : ''
    }

    render() {

        const {title} = this.props.todo
        return (
            <div className = 'todoCard'>
                <div className="container">
                        <div className="row">
                            <div className='col-md-1'>    
                            </div>

                            <div className="col-md-5 offset-md-2 border">
                                <h3 style={{textDecoration:`${this.crossTodoItem()}`}}> {title} </h3>
                            </div>
                            <div className="col-md-4">
                                <button onClick = {this.changeCompletedStatus} type='button' className='btn btn-success'> Complete </button>
                                <button onClick = {this.deleteTodo}type='button' className='btn btn-danger'> Delete </button>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}

const mstp = (appState) => {
    return appState
} 

export default connect(mstp, {deleteOneTodo})(TodoCard)
