import React, { Component } from 'react'

export class TodoCard extends Component {
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
                                <button type='button' className='btn btn-danger'> Delete </button>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}

export default TodoCard
