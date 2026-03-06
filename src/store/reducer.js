// Chứa initial state và reducer cho useReducer

import { SET_TODO_INPUT, ADD_TODO, DELETE_TODO } from "./constants";

const initialState = {
    todos: [],
    todoInput: ''
};

const reducer = (state, action) => {
    switch(action.type) {
        case SET_TODO_INPUT:
            return {
                ...state,
                todoInput: action.payload
            };
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(item => item.id !== action.payload)
            };
        default:
            console.log('Invalid action');
            return state;
    }
};

export { initialState };
export default reducer;