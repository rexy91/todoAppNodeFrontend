
export const getAllTodos = (todos) => {
    return{
        type:'GET_ALL_TODOS',
        payload: todos
    }
}

export const addOneTodo = (todoObj) => {
    return{
        type: 'ADD_ONE_TODO',
        payload: todoObj
    }
}

export const deleteOneTodo = (updatedArray) => {
    return{
        type: 'DELETE_ONE_TODO',
        payload: updatedArray
    }
}

export const resetAppData = () => {
    return{
        type: 'RESET_APP_DATA'
    }
}