import React, { Component } from 'react'
import {Form, Button} from 'semantic-ui-react'

export class TodoForm extends Component {
    state={
        toggleForm: false
    }
    
    toggleFormState = () => {
        this.setState({
            toggleForm: !this.state.toggleForm
        })
    }
    toggleForm = () => {
    return     <Form>
                    <Form.Field>
                        <label htmlFor=""> New Todo </label>
                        <label htmlFor=""> Title </label>
                        <input type="text"/>
                        <br/>
                        <label htmlFor=""> Description</label>
                        <textarea name="" id="" cols="3" rows="3"></textarea>
                        <br/>
                        <Button>Submit</Button>
                    </Form.Field>
                </Form>
    }

    render() {
        // console.log(this.state.toggleForm
        return (
            <div>
                <h3>Todo Form</h3>
                <Button onClick = {this.toggleFormState}>Add a Todo</Button>
                {this.state.toggleForm? this.toggleForm() : null}
            </div>
        )
    }
}

export default TodoForm
