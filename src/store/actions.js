// Chứa các actions cho reducer

import { SET_TODO_INPUT, ADD_TODO, DELETE_TODO } from "./constants";

const setTodoInput = (payload) => ({
    type: SET_TODO_INPUT,
    payload
});

const addTodo = (payload) => ({
    type: ADD_TODO,
    payload
});

const deleteTodo = (payload) => ({
    type: DELETE_TODO,
    payload
});

export { setTodoInput, addTodo, deleteTodo };