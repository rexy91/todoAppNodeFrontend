import React, { Component } from 'react'
import {connect} from 'react-redux'  
import {deleteOneTodo} from '../Redux/actions'

export class TodoCard extends Component {

    
    deleteTodo = () =>{
        fetch(`http://localhost:3000/todos/${this.props.todo._id}`, {
            method:'DELETE',
        })
        .then(res => res.json())
        .then(() => {
            console.log(this.props?.todos?.todos)
                                                                // The ones that doesn't match will be kept in new array. 
            const updatedArray = this.props?.todos?.todos?.filter(todo => todo._id != this.props?.todo?._id)
            this.props.deleteOneTodo(updatedArray)
        })
    } 

    render() {
        const {title, description} = this.props.todo
        return (
            <div className = 'todoCard'>
                <div className="container">
                        <div className="row">
                            <div className="col-md-6 offset-md-2">
                                <h3> {title} </h3>
                                <p> {description} </p>
                            </div>
                            <div className="col-md-4">
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
