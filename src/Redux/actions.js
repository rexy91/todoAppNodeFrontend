
export const getAllTodos = (todos) => {
    return{

        type:'GET_ALL_TODOS',
        payload: todos

    }

}