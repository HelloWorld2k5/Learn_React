import { useStore } from "../store";
import { SET_TODO_INPUT, ADD_TODO, DELETE_TODO } from "../store";
import { actions } from "../store";

function GlobalStateWithContextAndUseReducer() {
    const { state, dispatch } = useStore();

    const { todos, todoInput } = state;

    const handleAddTodo = () => {
        dispatch({
            type: ADD_TODO,
            payload: {
                id: Date.now(),
                content: todoInput
            }
        });
    };

    const handleDeleteTodo = (id) => {
        dispatch({
            type: DELETE_TODO,
            payload: id
        });
    };

    return (
        <>
            <input
                value={todoInput}
                type="text"
                placeholder="Enter todo..."
                onChange={(e) => dispatch(actions.setTodoInput(e.target.value))}
            />
            <button onClick={handleAddTodo}>Add todo</button>
            <h3>DANH SÁCH TODOS</h3>
            <ul>
                {todos.map((todo) =>
                    <li key={todo.id}>
                        <span>{todo.content}</span>
                        <button onClick={() => handleDeleteTodo(todo.id)}>Delete todo</button>
                    </li>
                )}
            </ul>
        </>
    );
}

export default GlobalStateWithContextAndUseReducer;
