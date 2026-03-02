import { useReducer, useRef } from "react";

// Initial state
const initialState = {
    tasks: [],
    task: "",
};

// Actions
const SET_TODO = "set_todo";
const ADD_TODO = "add_todo";
const TOGGLE_TODO = "toggle_todo";
const DELETE_TODO = "delete_todo";

// Reducer
const reducer = (state, action) => {
    switch (action.type) {
        case SET_TODO:
            return {
                ...state,
                task: action.payload,
            };
        case ADD_TODO:
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
            };
        case TOGGLE_TODO:
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                    task.id === action.payload
                        ? { ...task, isCompleted: !task.isCompleted }
                        : task,
                ),
            };
        case DELETE_TODO:
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.payload),
            };
        default:
            console.log("Invalid action!");
            return state;
    }
};

function TodoListWithUseReducer() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { tasks, task } = state;

    const inputRef = useRef(null);

    const handleChange = (e) => {
        dispatch({ type: SET_TODO, payload: e.target.value });
    };

    const handleAdd = () => {
        dispatch({
            type: ADD_TODO,
            payload: {
                id: Date.now(),
                content: task.trim(),
                isCompleted: false,
            },
        });

        dispatch({
            type: SET_TODO,
            payload: "",
        });

        inputRef.current.focus();
    };

    const handleToggleComplete = (id) => {
        dispatch({
            type: TOGGLE_TODO,
            payload: id,
        });
    };

    const handleDelete = (id) => {
        dispatch({
            type: DELETE_TODO,
            payload: id,
        });
    };

    return (
        <div>
            <input
                ref={inputRef}
                value={task}
                onChange={handleChange}
                type="text"
                placeholder="Nhập công việc..."
            />
            <button onClick={handleAdd}>Thêm công việc</button>
            <h3>DANH SÁCH CÔNG VIỆC</h3>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <span>
                            {task.content} (Trạng thái:{" "}
                            {task.isCompleted ? "Đã hoàn thành" : "Chưa hoàn thành"})
                        </span>
                        <button onClick={() => handleToggleComplete(task.id)}>
                            {task.isCompleted ? "Chưa hoàn thành" : "Hoàn thành"}
                        </button>
                        <button onClick={() => handleDelete(task.id)}>Xoá</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoListWithUseReducer;
