import React, { Component } from 'react'
import {Form, Button} from 'semantic-ui-react'
import {connect} from 'react-redux'
import { addOneTodo } from '../Redux/actions'

export class TodoForm extends Component {
    state={
        toggleForm: false,
        title:'',
        description:''
    }

    toggleFormState = () => {
        this.setState({
            toggleForm: !this.state.toggleForm
        })
    }
    //here just need e.target.name.value, because e not just one input. 
    submitTodo = (e)  => {
        fetch("http://localhost:3000/todos", {
            method:'POST',
            headers:{
                'content-type':'application/json',
                Accept:'application/json'
            },
            body:JSON.stringify({
                title: e.target.title.value,
            })
        })
        .then(res => res.json())
        .then(newTodoObj => {
            this.props.addOneTodo(newTodoObj)
        })
    }

    //Controlled Form
    handleOnchange = (e) => {
        // Pass state to input 
        this.setState({
            //here just need e.target.value, because e is one input field.
            [e.target.name]:e.target.value
        })
    }

    toggleForm = () => {
    return     <Form>
                    <Form.Field>
                        <label htmlFor=""> New Todo </label>
                        <br/>
                        <label htmlFor=""> Title </label>
                        <input className = 'form-control' onChange={this.handleOnchange} type="text" name='title' value={this.state.title}/>
                        <br/>
                        <label htmlFor=""> Description</label>
                        <textarea onChange={this.handleOnchange} name="description" id="" cols="3" rows="3" value={this.state.description} ></textarea>
                        <br/>
                        <Button>Submit</Button>
                    </Form.Field>
                </Form>
    }

    render() {
        return (
            <div className = 'container'>
                {/* <Button onClick = {this.toggleFormState}>Add a Todo</Button> */}
                {/* {this.state.toggleForm? this.toggleForm() : null} */}
                <div className="row">
                    <form action="" onSubmit = {this.submitTodo}>
                        <div className="col-md-5 offset-md-2">
                                <input type="text" name = 'title' className = 'form-control' placeholder='add item'/>
                        </div>
                            <div className="col-md-4 offset-md-1" style={{marginBottom:'10px'}}>
                            <button type="submit" class="btn btn-primary"> Submit </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default connect(null, {addOneTodo} )(TodoForm)
