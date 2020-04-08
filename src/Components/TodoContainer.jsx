import React, { Component } from 'react'
import {connect} from 'react-redux'
import TodoCard from './TodoCard'

export class TodoContainer extends Component {
    render() {
        const todosMapper = this.props?.todos?.todos?.map(todo => {
            return <TodoCard todo={todo} key={todo.id} />
        })
        return (
            <div>
                {todosMapper}
            </div>
        )
    }
}

const mstp = (appState) => {
    
    return {
        todos: appState.todos
    }
}
export default connect(mstp)(TodoContainer)
