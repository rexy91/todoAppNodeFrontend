
let initialState = {}

const todosReducer = (state = initialState, action) => {

switch (action.type) {

case 'GET_ALL_TODOS':
    return {...state, todos:action.payload} 

case 'ADD_ONE_TODO':
                            // Spread the todos, add the new todo. 
                            // It is an array, we can add without a key.
                            // Spread action.payload.newTodo to get keys/values out of todo object. 
    return {...state, todos:{todos:[...state.todos.todos, {...action.payload.newTodo}]}}

case 'DELETE_ONE_TODO':
    // const updatedArray = [{...state.todos.todos}]
    
    return {...state, todos:{todos:action.payload}}

case 'RESET_APP_DATA':
    return {...state, todos:{}}
    
default:
    return state;
}
} //End of switch

export default todosReducer;