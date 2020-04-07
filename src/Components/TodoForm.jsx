import React, { Component } from 'react'
import {Form, Button} from 'semantic-ui-react'
import {connect} from 'react-redux'

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
                description: e.target.description.value
            })
        })
        .then(res => res.json())
        .then(console.log)
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
    return     <Form onSubmit = {this.submitTodo}>
                    <Form.Field>
                        <label htmlFor=""> New Todo </label>
                        <br/>
                        <label htmlFor=""> Title </label>
                        <input onChange={this.handleOnchange} type="text" name='title' value={this.state.title}/>
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
            <div>
                <Button onClick = {this.toggleFormState}>Add a Todo</Button>
                {this.state.toggleForm? this.toggleForm() : null}
                <br/>
            </div>
        )
    }
}

export default connect(null, {addOneTodo} )(TodoForm)
