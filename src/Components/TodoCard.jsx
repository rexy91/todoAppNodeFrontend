import React, { Component } from 'react'

export class TodoCard extends Component {
    render() {
        const {title, description} = this.props.todo
        console.log(title,description)

        return (

            <div className = 'todoCard'>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        )
    }
}

export default TodoCard
