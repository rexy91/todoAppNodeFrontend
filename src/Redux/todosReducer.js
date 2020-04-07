
let initialState = {}

const todosReducer = (state = initialState, action) => {

switch (action.type) {

case 'GET_ALL_TODOS':
    return {...state, todos:action.payload} 

case 'ADD_ONE_TODO':
    return {...state}
default:
    return state;
}
} //End of switch

export default todosReducer;